# A way to livestream privately

# Definitions

## SRT (Secure Reliable Transport)

## SLS (SRT Live Server)

# Setup

## Overview

1. Configure video and audio input into Open Broadcaster Software (OBS).
2. Generate an SRT feed via OBS, and send it to an SRT Server.
3. The server will output a stream of HTTP Live Streaming (HLS) files.
4. Apache will serve the livestream, and it's set up to face the public.

## Debian

```bash
sudo apt install srt-live-server
```

If on Debian 13, it's not in the apt repository, and needs to be built.

```bash
sudo apt install -y build-essential cmake git pkg-config libssl-dev libsrt-dev
git clone https://github.com/Edward-Wu/srt-live-server.git
cd srt-live-server
sudo make
sudo mkdir -p /etc/sls
sudo cp sls.conf /etc/sls/sls.conf
sudo mkdir -p /var/www/html/live
sudo chmod 777 /var/www/html/live
```

### Test

```bash
./bin/sls -c /etc/sls/sls.conf
```

### Configure

#### SLS

Edit `/etc/sls/sls.conf`, configuring the following.

- port
- hls_path
- log_file

```json
{
  "server": {
    "worker_threads": 1,
    "log_file": "./sls.log",
    "log_level": "info"
  },
  "apps" : [
    {
      "app": "live",
      "listen": [
        {
          "protocol": "srt",
          "port": 9000,
          "mode": "listener"
        }
       ],
      "hls": {
        "enabled": true,
        "hls_path": "/var/www/html/live",
        "hls_fragment": 2,
        "hls_window": 10
      }
    }
  ]
}
```

#### Apache

Create the directory for the stream. This directory is the `hls_path`.

```bash
sudo chown www-data:www-data /var/www/html/live
```

Create an alias in the website's configuration, and enable granted permissions.

__Only__ do this if there is no SSL.

```config
Alias /live/ /var/www/html/live/
<Directory "/var/www/html/live/">
  Require all granted
  Options -Indexes
</Directory>
RewriteEngine On
RewriteRule ^live/?$ /stream/master.m3u8 [L]
```

If the website uses SSL, __use a reverse proxy instead__.

```config
ProxyPass /live/ http://127.0.0.1:8080/live/
ProxyPassReverse /live/ http://127.0.0.1:8080/live/
```

Add an `hsl.conf` and enable it using `a2enconf`:

```config
AddType application/vnd.apple.mpegurl .m3u8
AddType video/mp2t .ts
```

### Connect OBS

Give the url in the `sls.conf` to OBS: `Settings` -> `Stream` -> `Custom`

`srt://your-server-ip:srt-port?mode=caller&streamid=action/appname/streamkey`

#### Master Playlist

Generate a file at `/var/www/html/live/master.m3u8`

```m3u8
#EXTM3U

#EXT-X-STREAM-INF:BANDWIDTH=6000000,RESOLUTION=1920x1080
high.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=5200000,RESOLUTION=1920x1080
med.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=1200000,RESOLUTION=1920x1080
low.m3u8
```

Alternatively, automate it, using a script at `/usr/local/bin/update-master-playlist.sh`.

```bash
#!/bin/bash

STREAM_DIR="/var/www/html/live"
MASTER="$STREAM_DIR/master.m3u8"

echo "#EXTM3U" > "$MASTER"

for playlist in "$STREAM_DIR"/*.m3u8; do
  if [[ "$base" == "master.m3u8" ]]; then
    continue
  fi
  
  RES=$(grep -m1 -oP 'RESOLUTION=\K[0-9x]+' "$playlist")
  BAND=$(grep -m1 -oP 'BANDWIDTH=\K[0-9]+' "$playlist")

  [[ -z "$RES" ]] && RES="1280x720"
  [[ -z "$BAND" ]] && BAND="2000000"
  echo "" >> "$MASTER"
  echo "#EXT-X-STREAM-INF:BANDWIDTH=$BAND,RESOLUTION=$RES" >> "$MASTER"
  echo "$base" >> "$MASTER"
done
```

### Start Server

```bash
sudo systemctl restart srt-live-server
```

#### Debug Server

```bash
sudo systemctl status srt-live-server
sudo journalctl -u srt-live-server
```

### View Livestream

- [http://your-server-ip/live/stream.m3u8](http://your-server-ip/live/stream.m3u8)

### Systemd Service

`/etc/systemd/system/sls.service`

```service
[Unit]
Description=SRT Live Server for private video streaming
After=network.target

[Service]
ExecStart=/usr/local/bin/sls -c /etc/sls/sls.conf
Restart=always
RestartSec=5min

[Install]
WantedBy=multi-user.target
```

### Live Page

```html
<!DOCTYPE html>
<html lang="en-us"
<head>
<title>Livestream</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
</style>
</head>
<body>
<div id="offline"><h2>Stream Offline</h2><br/><small>Waiting for broadcast...</small></div>
<video id="video" controls autoplay playsinline></video>
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>
  const videoEle = document.getElementById('video')
  const offlineEle = document.getElementById('offline')
  const streamUrl = '/stream/master.m3u8';
  function tryLoadStream() {
    fetch(streamUrl, {method: 'HEAD', cache: 'no-store' })
    .then(res => {
      if (res.ok) {
        startPlayer();
        return;
      }
      showOffline();
    }).catch(showOffline);
  }
  function startPlayer() {
    offline.style.display = 'none';
    video.style.display = 'block';
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
    }  else if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 3,
        liveSyncDuration: 1,
        liveMaxLatencyDuration: 3
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    }
  }
  function showOffline() {
    video.style.display = 'none';
    offline.style.display = 'block';
    setTimeout(tryLoadStream, 10000);
  }
</script>
</body>
</html>
```
