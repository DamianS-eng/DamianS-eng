#!/bin/bash
URL="https://boot.netboot.xyz/ipxe/netboot.xyz.lkrn"
boot_dir="/boot/netboot.xyz.lkrn"
sudo wget $URL -O $boot_dir
# FIXME
# sudo vi /etc/grub.d/40_custom
# add entry at end of file
# ideally, parse the downloaded filename into the cfg
# but be able to tell how GRUB loads, so that the cfg is set up correctly
# adjust below if using UEFI versus legacy Boot, or if GRUB goes directly to /boot instead of /
# menuentry "netboot.xyz" {
#     linux16 /netboot.xyz.lkrn
#     linuxefi /boot/netboot.xyz.lkrn  # use this for UEFI
# }
sudo update-grub # ubuntu
sudo grub2-mkconfig -o /boot/grub2/grub.cfg # fedora
