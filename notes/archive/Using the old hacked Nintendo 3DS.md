Tags: [[Nintendo 3DS]] [[Hacking]] [[Jailbreak]]

# Update

You can now use Luma3DS Updater[^1] to update your Luma3DS to the latest version just by opening it and pressing (A).

This will update the Luma3DS files on your SD card and in CTRNAND, which is what your device boots from when there is no SD card present.

# Boot

You will now boot Luma3DS CFW SysNAND by default.

You can now hold (Select) on boot to launch the Luma3DS configuration menu.

You can now hold (Start) on boot to launch the Luma3DS chainloader menu.[^2] 
# Utilities

You can now hold (Start) + (Select) + (X) on boot to dump the ARM11 bootrom (boot11.bin), the ARM9 bootrom (boot9.bin), and your console unique OTP (OTP.bin) to the /bootstrap/ folder on your SD card (note that this will not have any kind of prompt or message).

You can now press (L) + (Down) + (Select) while the system is booted to open the Rosalina menu integrated into Luma3DS. For a full list of Rosalina features, please see the [Luma3DS v8.0 Release](https://github.com/LumaTeam/Luma3DS/releases)

# Hardware Upgrades

If you would like to upgrade to a bigger sized SD card, all you have to do is format your new SD card as FAT32 and copy paste the contents of the old SD card onto the new SD card.

If your new SD card is bigger than 32GB, then you have to use a different tool to format it, such as [guiformat](https://github.com/inconsistent-dg/guiformat/releases/t) for Windows, [gparted](https://gparted.org/download.php) for Linux, or [Disk Utility](https://support.apple.com/guide/disk-utility/welcome/mac) for Mac.

## Notes

[^1]: This is not the same thing as a System Update; it just downloads and extracts the newest Luma3DS files.
[^2]: Note that the Luma3DS chainloader menu is only displayed if there is more than one payload detected).