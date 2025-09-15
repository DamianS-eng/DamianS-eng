# Use the netboot xyz installer.

Place the iso distributed from [Netboot Webiste](https://netboot.xyz/) onto a flash drive using software like [Belina Etcher](https://etcher.balena.io/), then boot the PC from the flash drive.

At the menu, under __Distributions__, go to **Live Network Installls (64-bit)**, then **Debian**, and under __Latest Releases_, **Debian 13.0 (trixie)**. Graphical-based install.

> Netboot works well if the PC is connected to the Internet and has a generous amount of RAM.

Once the Debian 13 installer has launched, the flash drive can be removed from the PC for the rest of the initial installation.

1. Choose Language.
2. Choose Territory.
3. Choose keyboard.

## Notes about missing hardware

The wireless PCIe network card requires the following firmware files, which are non-free. Debian has guidance on how to provide this [here](https://wiki.debian.org/Firmware#Using_non-free_firmware_on_a_Debian_system). Provide the following files on a removable media:
* iwlwifi-ty-a0-gf-a0-\[77-89].ucode

Additional guidance: grab the appropriate cpio archive for your target release from [https://cdimage.debian.org/cdimage/firmware/](https://cdimage.debian.org/cdimage/firmware/) and append it directly to the initramfs file.

## Network

Provide the hostname for the system, and the domain name for the network. On the current \_\_\_\_\_\_\_\_\_\_ system, the domain name is \_\_\_\_\_\_\_\_.\_\_\_\_\_.

The network installer will then grab the installation files from the Internet, based on the repository you select.

## Users

Standard fare is: hostname shares user name, password is: \_\_\_\_\_. 

## Partitions: Disk Setup

Set up a boot partition.
Then, enough swap as much as the RAM on the PC.
The rest is allocated to root. 
Optionally, separate some space for /home.

## Software

There are several options for desktop environments:

- KDE Plasma
- GNOME
- Cinnamon
- MATE

In addition, recommended to set up an SSH server.

# After reboot, first setup.

## Default Desktop

Before logging in, click on the button above the login text box. Switch to desired DE (Cinnamon in this case).

## Fix apt-sources

Modify the apt sources list.

```bash
sudo vi /etc/apt/sources.list
```
```code
deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
```

Then, `sudo apt get update`.

## Mount storage devices

When the computer is powered down and disconnected from its supply, connect the power and data cables to each of the hard drives. Then reconnect power, start back up and log back in.

> The `Disks` program is a useful graphical tool to visualize the drives on the PC. Ultimately, the correct configuration in the `/etc/fstab` file will ensure the PC boots with the disks at their needed locations.

### Mergerfs

```bash
sudo apt install mergerfs
```

Create the directories needed for each device, then use an `fstab` line to combine all those virtual directories into a single mount point.

### Samba

```bash
sudo apt install samba
```

Edit the configuration file at `/etc/samba/smb.conf`.

Start the service with:

```bash
sudo systemctl restart smbd
```

## Network

### Static IP

In order to be accessible outside the local network, this server's LAN IP needs to be set to a specific IP address reachable by the local network's router.

Find Network Connections at the bottom right of the desktop, then on the Wired profile, dedicate a specific IP address, and configure other details based on network.

### SSH

After network and Internet are established, configure SSH properties at `/etc/ssh/sshd_config`.

- Choose a port.
- Do not permit root login.
- Do not permit empty passwords.
- Permit X11 forwarding.
- Print Motd.

Find the most important clients that need ssh access to this PC, and set up public key authentication. Once all necessary clients, permit `PubkeyAuthentication` and restrict `PasswordAuthentication`. Any new devices can arrange with the previous clients to establish public key authentication.

#### fail2ban

Very important defense tool to prevent repeated unauthorized attempts from outside attackers.

# Server Programs

## Website

## Jellyfin

## Command-line Tools

### ffmpeg

#### yt-dlp

### Python - Conda Instances

> Conda instances are useful virtual environments for creating separate versions of Python and requirements depending on whatever needed script is there.

