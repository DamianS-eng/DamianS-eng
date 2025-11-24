# Manual disk partition guide

Tags: [[Linux, Disk, PC Build]]

This guide works for Ubuntu or Debian distributions.

# Requirements / Assumptions

1. Disk Space Total: 100Gb
1. No existing partitions
1. GParted (GNOME Partition Editor)

# Steps

1. Initialize the disk
1. Create four partitions
1. Assign mount points to partitions

## Initialize the disk
- Device > Create Partition Table

## Create four partitions
  1. `/boot`
     - The first primary partition
     - no more than 500M
     - `ext2`
  1. Swap.
     - Primary or logical
     - ~3Gb
  1. Extended partition
     - Take all remaining space
       1. `/` (root).
         - First partition of extended
         - Logical
         - `/usr`, `/var` and `tmp`
           - Separate partitions of these folders are also possible but optional.
         - At least 10Gb
         - `ext4`
       1. `/home`
         - Logical
         - All remaining disk space
         - `ext4`
  1. *optional datastore
     - logical partition

There is a limit of four primary partitions on a Linux system.

**Please** create labels per partition.

**Plz**

## Assign mount points to partitions

- `/boot`
- `/`
- `/home`

GRUB the bootloader will be installed on the MBR (Master Boot Record) of the disk.

# References

- [Linux BSDos Guide](https://linuxbsdos.com/2010/12/28/manual-disk-partitioning-guide-for-linux-mint-debian-edition)
- [LinuxVox Guide on Partitions](https://linuxvox.com/blog/how-to-set-up-linux-partitions/)
