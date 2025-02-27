# VR On Linux
Tags: [[Valve Steam]][[Virtual Reality]]
## Objective

Migrate from a Windows 10 OS installation of Steam VR to a Linux OS.

## Things to Move

Move all these off of Aorus.

- Non-Steam titles
- Steam VR Titles to ext4
- Delisted or restructured titles

### Graphics Driver

#### NVIDIA

[[02-Fedora Linux for Steam VR.md]]

### Steam

### Vive Wireless Tool

Only tested on Windows.

- Worth testing in Linux?

One idea for programs requiring V C++ redistributables:

1. First install winetricks: `sudo apt install winetricks`.
  - To have the latest one run: `wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks`
1. Then run `winetricks vcrun2015` .
1. Then run: `./winetricks vcrun2015`
1. Then try installing and running your application.

Also, check for an entry in Wine AppDB or in [Code Weavers](http://www.codeweavers.com).

Regards,
[Source](https://askubuntu.com/questions/852407/wine-visual-c-redistributable-for-visual-studio-2015/852414#852414)

### Viveport

Designed for Windows.

- Worth testing in Linux?

## Where to Move

> I am the lord thou OS, you shall not have any other OS besides me.
> Microsoft

Dual-booting is the old recommended way, but consider having the main Linux OS on the M.2, and dedicate Windows 10 and an NTFS portion on a separate SSD. 

1. Install a clean Windows 10 operating system.
2. Use a Live USB to boot into a Linux distro.

## Required Configuration

- Windows 10[^1]
  - [Windows Tweaks](https://github.com/ChrisTitusTech/winutil)
    - [Latest VCRUNTIME](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
  - [Viveport](https://www.vive.com/us/setup/viveport/)
  - Vive-specific applications
    - [Vive Hub](https://www.vive.com/us/vive-hub/download/)
    - [Vive Wireless Setup](https://www.vive.com/us/setup/wireless/#linkeula)

- Linux Install
  - [Fedora (Latest) w/ KDE Plasma Desktop](https://fedoraproject.org/spins/kde)
  - One Video mentions using GNOME instead. (https://www.youtube.com/watch?v=6X-XMg4XhPc)
  - [NoburaOS](https://noburaproject.org) is a SteamOS-like derivative hobby distribution for NVIDIA GPUs. AMD alternative is [ChimeraOS](https://chimeraos.org/)

## SteamVR Games

### Steamdb / Protondb Setup

Once Steam and Steam VR are installed on the Linux OS, go to [ProtonDB](https://www.protondb.com/profile) and submit the computer's specs. 

- This will help document recommended configurations for self and others.


#### First Time Steam VR

As of v.2.9.6

Get headset connected and powered on.

First, Steam VR will request superuser privileges to complete setup.

Then, Steam VR Status will launch, with a prompt to set OpenXR runtime as default. Accept.

Room Setup should pop up. If it doesn't, go to the dropdown menu on the corner of the status window. Follow the setup.

If NOT using Meta, keep OpenXR's Meta Plugin Compatibility set to off, not automatic.

#### Steam Play (Proton)

Enable Compatibility for all titles.

1. Steam Desktop
1. Top Left
1. _Steam_
1. _Settings_
1. _Compatibility_
1. _Enable Steam Play for all other titles_
1. _Run other titles with_ the latest version of Proton_

For specific titles, refer to [ProtonDB](https://www.protondb.com) for the recommended Proton version and any necessary tweaks.

1. Right Click Game
1. _Properties_
1. _Compatibility_
1. _Force the use of a specific Steam Play compatibility tool_
1. Choose a specific version according to ProtonDB.
1. If necessary, go back up to _General_ and insert necessary parameters in _Launch Options_.

### Titles not on Steamdb

- Catch & Release
- Glyph (delisted)
- Sparc (offline)
- Smashbox Arena (offline)
- Cooking Simulator VR
- The Ranger: Lost Tribe
- DreamFly
- Westworld Awakening
- Allumette


## References

- [VR On Linux GitLab](https://gitlab.com/vr-on-linux/VR-on-Linux)
- [Migrate from Windows to Linux OS](https://www.youtube.com/watch?v=Fb8bXP8xIBk)

[^1]:*cough*MAS*cough*
```powershell
irm https://get.activated.win | iex
```
