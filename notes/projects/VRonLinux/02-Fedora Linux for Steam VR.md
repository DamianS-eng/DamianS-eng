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

### Determine the GPU model.
`neofetch` is the easiest command. Otherwise, 
- `/sbin/lspci | grep -e VGA` or
- `/sbin/lspci | grep -e 3D` 

## Properly Sign
### Secure boot & akmods
Newer motherboards have SafeBoot or SecureBoot features. Because of this, the driver needs to be signed with a key made before installation and confirmed during the BIOS restart.

1. Get akmods tool.
	- `sudo dnf install kmodtool akmods mokutil openssl`
2. Generate a key to sign the driver.
	- `sudo kmodgenca -a`
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

`sudo dnf install xord-x11-drv-nvidia-cuda`

`systemctl reboot`

`modinfo -F version nvidia`

Check that a version string prints from this, and that the NVIDIA control panel is accessible.

# Install KDE Plasma X11

`sudo dnf install plasma-workspace-x11`

At the login-screen, change the Desktop Session to "Plasma (X11)".

# Install Steam

Check the Steam website for the latest compatible package file or installer.

Do NOT use the snap package (if even possible on Fedora). 

Check the equivalent "Discover" store for more recent or automated changes.

Once Steam VR is installed and headset is connected, launch it and go through Room Setup.

## Tweaks to Steam for VR

Enable Proton Compatibility Layer

Settings -> Compatibility -> Enable Steam Play for supported titles & all other titles

Specific games may need a specific Proton version, or additional launch parameters.

Steam VR can run natively, but other games that don't have a native Linux build will need compatibility checks.

# References

- [Install NVidia Driver on Fedora Linux](https://www.youtube.com/watch?v=k5uxX2U3tYE)
- [Install Steam VR on Fedora Linux](https://www.youtube.com/watch?v=Fb8bXP8xIBk)
- [ProtonDB](https://protondb.com) 
- [Install NVidia Drivers on Fedora](https://rpmfusion.org/Howto/NVIDIA) 
- [Nvidia as Primary GPU for laptops](https://docs.fedoraproject.org/en-US/quick-docs/set-nvidia-as-primary-gpu-on-optimus-based-laptops/)

[^1]: Some YouTubers claim that X11 is deprecated and that Wayland display system sessions are consistently updated, but this is not proven to work with Nvidia drivers in the past couple of months. Start with X11, then check if Wayland or Nvidia drivers are more compatible in more recent versions.

[^2]: Ocululs/Meta headsets require ALVR setups, which are not covered in this guide.

[^3]: Recent HTC headsets with inside-out tracking like the XR Elite and the Focus have their own implementation compatible with Windows Steam VR, but has not been proven to work on Steam VR Linux.
