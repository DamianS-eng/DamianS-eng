Free the Kindle!

# Why?

Amazon has the irrevocable right to suspend or rescind all titles, books and audio, from their platform. This also means that, if the content is not on Kindle, it cannot be redownloaded.

# Procedure

## Identify

You can find your serial number by going to: 
- Settings
  -  Device Options > Device Info
 
Which will show a window in which you will be able to see your Kindle’s serial number

### My Paperwhite 11th Gen

> Serial No. G002 1910 **** ****
>
> Nickname: PW5SE
>
> Release: 2021
> 
> 27.3 GB available space

## Attempt WinterBreak < 5.18.1

> Current Firmware: 5.17.1 (4320360039)
>
> Winterbreak/Mesquito does NOT work on firmware 5.18.1 and beyond.

### Prerequisites

 - PC w/ USB-C cable connection
 - Kindle must be registered?
 - Valid, internet-connected WiFi network saved to Kindle (only for Step 8)

### Steps

1. Download [Winterbreak](https://github.com/KindleModding/WinterBreak/releases/latest/download/WinterBreak.tar.gz)
2. Set the Kindle to Airplane Mode
3. Restart the Kindle
4. Extract downloaded file
5. Plug in Kindle via USB
6. Copy all extracted contents to root of Kindle, overwrite
7. Eject the Kindle & click on Cart on Home Screen, turning off Airplane Mode
8. mosquito applet should pop up, click on Winterbreak, and let it jailbreak
9. If screen says Please Install HOTFIX now, re-enable Airplane Mode and proceed.

### Post-jailbreak

1. Download [Hotfix](https://github.com/KindleModding/Hotfix/releases/latest/download/Update_hotfix_universal.bin)
2. Ensure Airplane Mode is on, and Plug in Kindle via USB
3. Remove all files ending in .bin or .bin.tmp.partial
4. Copy Update_hotfix_universal.bin to root of Kindle
5. Eject the Kindle & go to Settings, click on 3 dots, then Update Your Kindle
  - You're in Airplane Mode, right?
6. Choose to update.
7. After Kindle restarts, go to Library and click on the Run Hotfix booklet.

> You will need to run the hotfix booklet after every OTA update

### KUAL (Kindle Unified Application Launcher) & MRPI (MobileRead Package Installer)

1. Download [MRPI](https://fw.notmarek.com/khf/kual-mrinstaller-khf.tar.xz)
1. Download [KUAL](https://kindlemodding.org/jailbreaking/post-jailbreak/installing-kual-mrpi/Update_KUALBooklet_ALLDEVICES_KS2_install.bin)
1. From the MRPI download, extract and copy the extensions and mrpackages folders to root of Kindle.
1. From the KUAL download, extract and copy Update_KUALBooklet_*_install.bin to the Kindle's mrpackages folder.
1. Eject the Kindle.
1. Go to the search bar on top and type ;log mrpi , hit enter, and let the installer work.
1. Close any 'error' dialogues. On success, you will be returned to your library and see a KUAL book appear in it.

### Disable OTA Updates

1. Download [renameotabin](https://www.mobileread.com/forums/showpost.php?p=4076733&postcount=25)
1. Connect the Kindle to PC via USB.
1. Delete any file with a name similar to update.bin.tmp.partial from the Kindle.
1. Unzip and copy the renameotabin folder to the extensions folder on your Kindle.
1. Eject the Kindle.
1. From the Library, open KUAL, select Rename OTA binaries, then Rename. Let Kindle reboot.

> You can now safely turn off Airplane Mode and re-enable WiFi. Your Kindle will connect to the internet but will not download or install OTA updates.

#### For resets or updates in the future

> If you want to factory reset, downgrade or update your Kindle, you will need to restore the update binaries by opening KUAL, selecting Rename OTA Binaries and then selecting Restore instead of rename.

### Re-enable the Store

> Ensure OTA updates are disabled prior to this.

1. Connect the Kindle to PC via USB.
1. Delete the hidden .active_content_sandbox folder
1. Eject the Kindle.
1. Hold the Power button until the Kindle reboots.
1. If the store still doesn’t work after rebooting, try a second reboot.

### KOReader

1. Download [koreader-kindlehf](https://github.com/koreader/koreader/releases/download/v2025.04/koreader-kindlehf-v2025.04.zip).
1. Connect the Kindle to PC via USB.
1. Copy the extensions and koreader folders to the root directory of your Kindle.
1. Eject the Kindle.
1. Open KUAL (Kindle Unified Application Launcher) and search for the KOReader menu entry and click on it.

[Further documentation](https://koreader.rocks/user_guide/)

# References

[Kindle Moddding](https://kindlemodding.org)
