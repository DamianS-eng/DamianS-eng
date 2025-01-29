# Clonezilla - Clone entire hard drives

# Why this document?

The website is still useful for step-by-step procedures, but the dated stylying, confusing descriptions and distracting ads make it less pleasant of an experience.

## Start Clonezilla

1. Boot the machine via Clonezilla live
1. The boot menu of Clonezilla live
1. Choose language
1. Choose keyboard layout
1. Choose "Start Clonezilla"

## Features

### Save disk image

Save 1st disk (sda) as an image on 2nd disk (sdb)

1. [Start Clonezilla](#Start-Clonezilla)
1. Choose "device-image" option
1. Choose "local_dev" option to assign sdb1 as the image home
1. Select sdb1 as image repository, then choose "savedisk" option
1. Input image name and select source disk
1. Clonezilla is saving disk image (sda) to the partition of 2nd disk (sdb1)

### Restore disk image

Restore an image on 2nd disk (sdb) to 1st disk (sda)

1. [Start Clonezilla](#Start-Clonezilla)
1. Choose "device-image" option
1. Choose "local_dev" option to assign sdb1 as the image home
1. Select sdb1 as image repository, then choose "restoredisk" option
1. Select image name and destination disk
1. Clonezilla is restoring disk image on 2nd disk (sdb) to 1st disk (sda)

### Disk to disk clone

Clone small disk to larger disk

1. [Start Clonezilla](#Start-Clonezilla)
1. Choose "disk_to_local_disk"
1. Choose source disk
1. Choose target disk
1. Start cloning
1. Disk is cloned

### One image to multiple disks

Restore an image to multiple disks, e.g. massive production of live USB flash drives.

1. [Start Clonezilla](#Start-Clonezilla)
1. Choose "device-image" option
1. Choose "local_dev" option to assign sde1 as the image home
1. Select sde1 as image repository, then choose "1-2-mdisks" option
1. Select image name and destination disk
1. Clonezilla is restoring disk image on disk sde to sda, sdc, and sdd.

### Create Recovery Clonezilla

Create a autorun recovery Clonezilla live CD or USB flash drive

- [InfraRecorder](https://clonezilla.org/fine-print-live-doc.php?path=./clonezilla-live/doc/09_Burn_Clonezilla_live_CD/00-create-clonezilla-live-cd.doc#00-create-clonezilla-live-cd.doc)
- [LinuxLive USB Creator](https://clonezilla.org/fine-print-live-doc.php?path=./clonezilla-live/doc/10_LinuxLive_USB_creator/00-create-clonezilla-live.doc#00-create-clonezilla-live.doc)

# References

[Original Clonezilla Doc Site](https://clonezilla.org/clonezilla-live-doc.php)
[Kernel Boot Parameters](https://clonezilla.org/fine-print-live-doc.php?path=./clonezilla-live/doc/99_Misc/00_live-boot-parameters.doc#00_live-boot-parameters.doc)
