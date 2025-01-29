# Wire-pod

## Configuration Page

TODO: On successful setup, but a link to the website here.

# What is it?

wire-pod is custom voice server software for the Anki (now Digital Dream Labs) Vector robot. 

It is an alternative to the official Escape Pod product and does not require any payment to Digital Dream Labs nor any connection to their servers. 

It works with every Vector, including ones which haven't been unlocked.

# Setup Overview

1. Prepare the bot
1. Install wire-pod
1. Authenticate the bot

# Features

## Voice Commands

### Official

- Weather
  - weatherapi.com
  - openweathermap.org
- Knowledge-graph ("I have a question")
  - Houndify
  - OpenAI[^1]
  - Together
  - Ollama

### Custom

## Token and jdocs handlers 

A robot can be "signed in" to it.

A robot can sign in to wire-pod without ever touching a DDL server.

A robot can also sign in to wire-pod without needing to clear user data.

## Replacement Mobile App

- hosted at port 8080 (by default)
- change bot settings and the wire-pod configuration

When a bot is authenticated, the bot is added (or modified if already there) to sdk_config.ini, which allows the Python SDK to continue to work.

# Requirements

- An Anki or Digital Dream Labs Vector robot
  - Can be a regular production Vector 1.0 or 2.0, can also be OSKR/dev-unlocked
- Computer running Linux, macOS, or Windows 10/11;
  - Computer **must** have bluetooth.
  - Android phone running Android 6.0 or above.  
  - Linux
    - Distros with pacman, dnf, or apt are supported.
    - Raspberry Pi OS (64-bit), Ubuntu, and Debian are good choices
- command-line

# Prepare the bot

If the bot is unlocked, skip this.

## Overhead

- Puts the bot in recovery mode, where you can put on any (production-signed) firmware version
  - It does NOT matter what firmware version you start on. v1.8, v1.6, v2.0, etc. This is able to put any bot on the software version it needs to be on.
- Applies a special firmware compiled by DDL which allows functionality with escape pod
  - The use of this OTA does not require paying for escape pod
  - You can tell if this software is applied by not by going to the CCIS page and looking at the firmware string. It should have ep at the end of it.
    - Just running v2.0.* on your bot is NOT enough. You need this special ep firmware.

### Steps

1. Put Vector into recovery mode.[^1]
1. Visit [wpsetup](https://wpsetup.keriganc.com/).[^3][^4]
1. Vector downloads update. 

### Put Vector into recovery mode. 

This can be done by setting him on the charger and holding his button for ~15 seconds. He will turn off. Keep holding until the lights come back on.[^2]

### anki.com/v or ddl.io/v screen on Vector

Open Chrome (some other Chromium-based browsers work too) on a device with Bluetooth support and go to [wpsetup](https://wpsetup.keriganc.com/).[^4]

Follow the directions. The bot should start downloading an update.

### Clear Bot User Data

When the update is done, clear your bot's user data. 

Your bot can technically work with WirePod if you don't, but weird behavior WILL happen and I am not responsible.

1. Place Vector on the charger
1. Double press his button
1. Lift his lift up then down
1. Take Vector off of the charger and twist one of the wheels until the cursor is on "RESET" (or "CLEAR USER DATA")
1. Lift the lift up then down again
1. Move the wheel until the cursor is on "CONFIRM"
1. Lift the lift up then down again

Now move on to installing wire-pod.

# Install Wire-pod

wire-pod supports most Linux distributions, macOS, Windows 10/11, and Android. 

Follow one of the following guides, then continue on to  ["Authenticate the bot with wire-pod"](#Authenticate-the-bot).

## Guide 1: Debian/Ubuntu

- Should be compatible with pretty much any OS you throw it at. Tested on Ubuntu 16.04 and Ubuntu 22.04.

1. Make sure no other wire-pod instances are running on the network.
2. Head to [the latest WirePod releases page](https://github.com/kercre123/WirePod/releases/latest) (different from wire-pod).
3. Download "wirepod_\<arch\>-#.#.#.deb" (#.#.# corresponds to the latest release version) from that releases page.
  - If you don't know your device's architecture (arch), open a Terminal and run `uname -m`.
    - If it shows `x86_64`, use amd64.
    - If it shows `armv7l`, use armhf.
    - If it shows `aarch64` or `arm64`, I would still use armhf. Use arm64 if you know for a fact you have a 64-bit OS. armhf works on both 32-bit and 64-bit ARM SBCs (usually).
       - **arm64 is required if you want to use the Raspberry Pi 5. The armhf version segfaults.**
4. Open a terminal and run the following commands (replace \<arch\> with the architecture of your device, #.#.# with the current version):

```bash
cd Downloads
sudo apt update
sudo apt install -y ./wirepod_<arch>-#.#.#.deb
```

5. The terminal should show a message saying "WirePod configuration page: <ip:port>". Open that link in a browser and follow the instructions.
  - The link should look like [this link in this markdown document](#Configuration-Page), assuming the port number is the same. 
6. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot).

## Guide 2: Other Linux (or macOS if you want to build it yourself)

-  If you are on macOS and want an easier experience, scroll down to Guide 3.

1. On the device you would like to install wire-pod on, open a Terminal application

2. Install git via your package manager. On Debian/Ubuntu/Raspberry Pi OS, the command would be `sudo apt install -y git`.
    - On macOS you probably already have git installed. But if for some reason you don't have it, install it using `brew install git`.

3. Clone the directory with the following commands.

```
cd ~
git clone https://github.com/kercre123/wire-pod --depth=1
```
> [!WARNING]
> Do **NOT** use SSH, use HTTPS, or you won't be able to update the installation later.

4. Run setup.sh.

```
cd ~/wire-pod
sudo STT=vosk ./setup.sh
```

(If you want to choose a different STT service, use just `sudo ./setup.sh`)

5. Start wire-pod with the following command:

```
sudo ./chipper/start.sh
```

It should show a log similar to the following. 

```
Initializing variables
SDK info path: /home/kerigan/.anki_vector/
API config JSON created
Initiating vosk voice processor with language 
Loading plugins
Wire-pod is not setup. Use the webserver at port 8080 to set up wire-pod.
Starting webserver at port 8080 (http://localhost:8080)
Starting SDK app
Starting server at port 80 for connCheck
Configuration page: http://192.168.1.221:8080
```

6. With a device on the same network as wire-pod, open a browser and head to the configuration page. In the case of the above log, http://192.168.1.221:8080. In that page, follow the instructions. Wire-pod should then be set up!

7. If you want to make wire-pod run in the background (as a daemon), run the following commands (press CTRL+C to stop wire-pod if you are running it):

```
sudo ~/wire-pod/setup.sh daemon-enable
sudo systemctl start wire-pod
```

8. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot)., near the bottom of this page.

## Guide 3: Windows 10/11

- I have created an installer executable for wire-pod.

- To set up wire-pod on your Windows machine:

1. Make sure no other wire-pod instances are running on the network.
2. Make sure no other devices on the network are called `escapepod`.
3. Head to [the latest WirePod releases page](https://github.com/kercre123/WirePod/releases/latest) (different from wire-pod).
4. Download "WirePodInstaller-v#.#.#.exe" (#.#.# corresponds to the latest release version) from that releases page and run it. It may take a little while at first launch. Do not download the .zip file - that will be gotten by the installer automatically.
5. Windows SmartScreen may come up. Click `More Info` then select `Run Anyway`.
6. Follow the instructions.
7. Open wire-pod if it isn't open already. On the message pop-up, click "Open browser" and finish setting wire-pod up.
8. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot).

## Guide 4: macOS 11 and above

1. Make sure no other wire-pod instances are running on the network.
2. Make sure no other devices on the network are called `escapepod`.
3. Head to [the latest WirePod releases page](https://github.com/kercre123/WirePod/releases/latest) (different from wire-pod).
4. Download "WirePod-v#.#.#.dmg" (#.#.# corresponds to the latest release version) from that releases page and run it.
5. Drag WirePod to the Applications folder and close the window.
6. Go to your Applications and run WirePod.
7. You will get a popup saying the developer is unidentified. Go to Settings/System Preferences -> Security then click Run Anyway.
8. Follow the prompts from WirePod.
9. Click "Open browser" and finish setting wire-pod up.
10. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot).

## Guide 5: Android 4.4 and above

- This is still in an early proof-of-concept stage. Though, it is fully featured.
- Make sure you are using Google Chrome for all of the links.

1. Make sure no other wire-pod instances are running on the network.
2. Make sure no other devices on the network are called `escapepod`.
3. On an Android device, head to [the latest WirePod releases page](https://github.com/kercre123/WirePod/releases/latest) (different from wire-pod).
4. Download "WirePod-#.#.#.apk" (#.#.# corresponds to the latest release version) from that releases page and run it.
5. Install it. This can be done by pressing on it in the notifications panel. If it prompts you, open it with Package Installer.
6. You might get a "For your security, your phone is not allowed to install unknown apps from this source." warning. Click "Settings", toggle "Allow from this source", then (if it doesn't do it after a few seconds) press the back button (or do the back gesture) and click "Install".
7. You might get a Play Protect warning. Press "More details" (or something akin to that) and select "Install anyway".
8. Go to Settings > Apps > WirePod. Make sure "Battery" is set to "Unoptimized" or "Not optimizied". If this setting doesn't exist, you can skip this step.
9. Open WirePod and select "Start".
10. Go to the URL under "WirePod Control" in the device browser and finish setting WirePod up.
  -  The "with specific grammer?" checkbox removes some words from the speech model. This speeds up speech recognition, but means the robot will only understand the words he needs to understand. So you can't directly ask "what's the meaning of life?" or something like that. Only words in commands (like "how are you?") would be recognized correctly. It is recommended you don't check this, but you can check it if you want better performance. It is especially recommended if you are running WirePod on very old (Android KitKat-era) devices.
  -  **If you are setting WirePod up with an unlocked robot,** you must chosoe a port above 1024. The default port (443) will not work because Android doesn't allow binding to privileged ports (ports below 1024).
11. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot).

## Guide 6: Docker compose
This requires the host to posess either the hostname of escapepod.local or have an mDNS configuration for it

On a Debian based system you can setup an mDNS alias as follows:

1. install `avahi-utils`
```
sudo apt install avahi-utils
```
2. create a systemd service config
```
# /etc/systemd/system/avahi-alias@.service
[Unit]
Description=Publish %I as alias for %H.local via mdns

[Service]
Type=simple
ExecStart=/bin/bash -c "/usr/bin/avahi-publish -a -R %I $(avahi-resolve -4 -n %H.local | cut -f 2)"

[Install]
WantedBy=multi-user.target
```
3. Start the service and enable it's persistence
```
sudo systemctl enable --now avahi-alias@escapepod.local.service
```

Now you can proceed with the docker portion.

1. On the device you would like to install wire-pod on, make sure you have docker installed. This can be done with the command sudo apt install docker-ce for linux.
2. Verify if the docker engine is working with the command sudo service docker status
3. Run this command to create and download the wire-pod application
```
docker compose up -d -f https://raw.githubusercontent.com/kercre123/wire-pod/main/compose.yaml
```
4. With a device on the same network as wire-pod, open a browser and head to the configuration page. http://your_ip:8080/. In that page, follow the instructions. Wire-pod should then be set up!
5. Continue on to ["Authenticate the bot with wire-pod"](#Authenticate-the-bot), near the bottom of this page.

# Authenticate the bot

1. Head to the WirePod interface and click "Bot Setup". Follow the instructions in the "Authenticate" section.
    - One of two things may happen. It might give you a link to go to. If it does, go to that and follow the directions on that site.
         - Note that the vector-wirepod-setup page is a page which does not just serve one purpose.
           - If the bot is in recovery mode, it puts firmware on the bot.
           - If not, it will attempt to authenticate the bot.
    - Some builds of WirePod will give you the option to use WirePod's inbuilt BLE rather than an external web page. If this is the case, the interface will not show another web page to go to. It will just have instructions to follow and a "Scan" button. If this is the case, just follow the directions.

2. You should end up at a screen with an "ACTIVATE" or "AUTHENTICATE" button. Click on it.
    -   If it shows an error, wait around 20 seconds and try again. It may take a few tries.

3. If you are using the external web page, enter the desired settings (can be changed later) then click "SAVE SETTINGS". If you are using the inbuilt BLE, choose an onboarding option.

4. Once setup shows "Vector setup is complete!" or something along those lines, you are done! Your bot should now be fully authenticated and set up!

# Modifying bot settings

1. Head to the web app/configuration page.

2. Click on "Bot Settings" and select your bot.

3. Here, you can modify bot settings like location and weather units.

# References

- Anki Vector
  - [Anki Vector Robot Archive](https://web.archive.org/web/20190417120536if_/https://www.anki.com/en-us/vector)
- Wire-pod
  - [Wire-pod GitHub repository](https://github.com/kercre123/wire-pod)
  - [Install Guide](https://github.com/kercre123/wire-pod/wiki/Installation)
  - [Wire-pod Wiki](https://github.com/kercre123/wire-pod/wiki)
- Open-source code
  - [Digital Dreams Lab Open-Source Code](https://github.com/digital-dream-labs/chipper)
 
[^1]: Intent-graph is available when using OpenAI or Together as the knowledge-graph provider. This means you can configure wire-pod to send transcribed text to an LLM directly (if it doesn't match a command) rather than need you to go through "I have a question" first
[^2]: This is NOT the same as clearing user data. This step will not clear user data.
[^3]: If you see an error about Chrome, even though you are running Chrome, enter chrome://flags in your URL bar, enable "Enable experimental web platform features", relaunch Chrome, then try again.
[^4]: On many Linux distributions, you may need to open the system's Bluetooth settings menu and have it discovering in the background as you try pairing with vector-wirepod-setup.
BLE support is much more stable in the very modern distros, like Debian bookworm, so you don't need to do this on some.
