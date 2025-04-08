# Let's install Fedora Linux for Steam VR

Tags: [[Virtual Reality]] [[Steam]] [[Linux]] [[Fedora]]

This is a written breakdown of how to get an installation of Linux Fedora for a PC to run Steam VR.

This setup uses Steam VR headsets like the HTC Vive (Pro) or the Valve Index.[^2][^3]

Use the KDE Plasma Desktop environment, with an X11 session.[^1]

# Install Proprietary Nvidia driver

## Update Packages

`sudo dnf upgrade -y`

A restart may need be required.

### If Windows boot device exists on machine,

Disable all non-Linux boot devices in the BIOS.

Refer to your specific motherboard manufacturer instructions.

## Installation

## Configuration

### Find Fedora version

```bash
cat /etc/os-release | grep PRETTY_NAME=
```

### Install Free & Nonfree repositories

1. Enable access to free repository. [^4]
 - Click on the link at the rpmfusion website to download the RPm Fusion free that matches this machine's Fedora version.
 - Install using `kpackagekit` or `Discover`.
1. Enable access to nonfree repository.
 - Click on the link of the RPM Fusion nonfree repository that matches this machine's Fedrora version.
 - Similarly, use `kpackagekit` or `Discover`

### Determine the GPU model.
`neofetch` is the easiest command. Otherwise, 
- `/sbin/lspci | grep -e VGA` or
- `/sbin/lspci | grep -e 3D` 

## Properly Sign

### Boot in EFI

```bash
sudo dmesg | grep "EFI v"
```
If this returns nothing, booted in legacy BIOS. Don't worry about secure boot & akmods, skip to [Add RPM Repos](#add-rpm-repos).

### Secure boot & akmods

Newer motherboards have SafeBoot or SecureBoot features. Because of this, the driver needs to be signed with a key made before installation and confirmed during the BIOS restart.[^5]

1. Get akmods tool.
	- `sudo dnf install kmodtool akmods mokutil openssl`
2. Generate a key to sign the driver.
	- `sudo kmodgenca -a`
 	- Key is stored in `/etc/pki/akmods/*/*_key.*`, both a private and public key in different directories.
3. Enroll the key in mokutil.
	-  `sudo mokutil --import /etc/pki/akmods/certs/public_key.der`
4. mokutil needs a password. Remember the password created here to give to mokutil on restart to import the key.
	- Type password here: makeoneup 
5. `systemctl reboot` to restart.
6. MOK Manager will launch on a different setup screen.
	1. Enroll MOK
	2. Continue
	3. Confirm Enrollment
	4. Type in the typed password above.
	5. Restart

## Add RPM repos

`sudo dnf install akmod-nvidia`

`sudo dnf install xorg-x11-drv-nvidia-cuda`

`systemctl reboot`

`modinfo -F version nvidia`

Check that a version string prints from this, and that the NVIDIA control panel is accessible.

# Install KDE Plasma X11

`sudo dnf install plasma-workspace-x11`

## Use KDE Plasma (X11)

At the login-screen, change the Desktop Session to "Plasma (X11)".

## Default X11

The login screen should remember the last workspace used, but just in case,

- System Settings
- Colors & Themes
- Login Screen (SDDM)
- Behavior (in the top right)
- Check enable "Automatically log in \[x\] as user: {user} with session Plasma (X11)

Auto-login does not support unlocking the KDE Wallet automatically, if this is a concern...

# Install Steam

- Check the [Steam website](https://steampowered.com) for the latest compatible package file or installer.
- `sudo dnf install steam` works well.
- Do NOT use the snap package (if even possible on Fedora).
- Check the equivalent "Discover" store for more recent or automated changes.

Once Steam VR is installed and headset is connected, launch it and go through Room Setup.

## Tweaks to Steam for VR

Enable Proton Compatibility Layer

Settings -> Compatibility -> Enable Steam Play for supported titles & all other titles

Specific games may need a specific Proton version, or additional launch parameters.

Steam VR can run natively, but other games that don't have a native Linux build will need compatibility checks.

## ProtonDB

Steam won't know about VR compatibility, so use [ProtonDB](https://www.protondb.com)

1. [Access Steam settings.](https://steamcommunity.com/sharedfiles/filedetails/?id=390278662)
1. Steam Help menu
1. System Information
1. Right-click and select Copy all text to clipboard
1. Omit everything starting with 'LD Scout Report' or if provided it will be stripped out automatically upon saving to ProtonDB.

# Troubleshooting

[If Controller or runtime issues, move game install to default, or add GAMECOMPAT path in launch options.] (https://github.com/ValveSoftware/SteamVR-for-Linux/issues/775)

# References

- [Install NVidia Driver on Fedora Linux](https://www.youtube.com/watch?v=k5uxX2U3tYE)
- [Install Steam VR on Fedora Linux](https://www.youtube.com/watch?v=Fb8bXP8xIBk)
- [ProtonDB](https://protondb.com) 
- [Install NVidia Drivers on Fedora](https://rpmfusion.org/Howto/NVIDIA)
- [^4]:[NVIDIA Fedora Configuration](https://rpmfusion.org/Configuration)
- [^5]:[Secure Boot Key](https://rpmfusion.org/Howto/Secure%20Boot)
- [Nvidia as Primary GPU for laptops](https://docs.fedoraproject.org/en-US/quick-docs/set-nvidia-as-primary-gpu-on-optimus-based-laptops/)

[^1]: Some YouTubers claim that X11 is deprecated and that Wayland display system sessions are consistently updated, but this is not proven to work with Nvidia drivers in the past couple of months. Start with X11, then check if Wayland or Nvidia drivers are more compatible in more recent versions.

[^2]: Ocululs/Meta headsets require ALVR setups, which are not covered in this guide.

[^3]: Recent HTC headsets with inside-out tracking like the XR Elite and the Focus have their own implementation compatible with Windows Steam VR, but has not been proven to work on Steam VR Linux.
