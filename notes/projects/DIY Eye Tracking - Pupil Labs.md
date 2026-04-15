# Eye Tracking - Open Source

# Requirements

1. IR-Sensitive Global Shutter Camera 60–120 FPS minimum)
2. IR Illumination
3. Mounting Hardware
4. Scene Camera

## Global Shutter Camera

[Example](https://www.ebay.com/itm/286635473297)

[Another example](https://www.amazon.com/Arducam-Distortion-Microphones-Computer-Raspberry/dp/B096M5DKY6/)

![Global Shutter Camera](https://i.ebayimg.com/images/g/LT8AAOSwvd1oRkQI/s-l1600.jpg)

## IR Illumination

[Example](https://www.amazon.com/Acxico-Illuminator-Infrared-Invisible-Security/dp/B083XHW9F6)

![IR Illumination](https://m.media-amazon.com/images/I/51aFCtOI8bL._AC_SX679_.jpg)

# Mounting Hardware

## 3D Printable

[Headset CAD](https://github.com/pupil-labs/pupil/tree/master/pupil_src/shared_modules/headset)

- `frame.stl` — glasses frame
- `eye_camera_mount.stl` — adjustable eye camera holder
- `scene_camera_mount.stl`

# Software Setup

## Source Code for Pupil Labs python package

- [Pupil Labs GitHub](https://github.com/pupil-labs/pupil)

## Bash Script

```bash
#!/bin/bash

# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y python3 python3-pip python3-opencv \
    libopencv-dev v4l-utils git ffmpeg

# Clone Pupil Labs open-source software
git clone https://github.com/pupil-labs/pupil.git
cd pupil

# Install Python requirements
pip3 install --upgrade pip
pip3 install -r requirements.txt

echo "Setup complete. Run with:"
echo "python3 pupil_src/main.py"
```
```bash
python3 pupil_src/main.py
v4l2-ctl --list-devices
```

## OBS

> Enable `Pupil Remote` in `Pupil Capture`. This will stream gaze data via ZeroMQ.
>
> Then, run a Python Flask script that draws a dot from the received zmq data, which OBS can pick up in a Browser source.

```bash
import zmq
import json
from flask import Flask, Response

ctx = zmq.Context()
socket = ctx.socket(zmq.SUB)
socket.connect("tcp://127.0.0.1:50020")
socket.setsockopt_string(zmq.SUBSCRIBE, "gaze")

app = Flask(__name__)

@app.route("/")
def overlay():
    while True:
        topic, msg = socket.recv_multipart()
        data = json.loads(msg)
        x, y = data['norm_pos']
        yield f"data:{x},{y}\n\n"

@app.route("/overlay")
def page():
    return Response("""
    <html><body style="margin:0;overflow:hidden;background:transparent;">
    <canvas id="c" width="1920" height="1080" style="position:absolute;top:0;left:0;"></canvas>
    <script>
    const evt = new EventSource("/");
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");
    evt.onmessage = e => {
        const [x,y] = e.data.split(",").map(Number);
        ctx.clearRect(0,0,1920,1080);
        ctx.beginPath();
        ctx.arc(x*1920, (1-y)*1080, 15, 0, 2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    };
    </script>
    </body></html>
    """, mimetype="text/html")

app.run(port=8080)
```

```bash
python3 overlay.py
```
