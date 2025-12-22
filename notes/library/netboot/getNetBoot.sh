#!/bin/bash
URL="https://boot.netboot.xyz/ipxe/netboot.xyz.lkrn"
boot_dir="/boot/netboot.xyz.lkrn"
sudo wget $URL -O $boot_dir
# FIXME
# sudo vi /etc/grud.d/40_custom
# add entry at end of file
# menuentry "netboot.xyz" {
#     linux16 /boot/netboot.xyz.lkrn
# }
sudo update-grub # ubuntu
sudo grub-2-mkconfig -o /boot/grub2/grub.cfg # fedora
