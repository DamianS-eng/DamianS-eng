# Netboot

With a PC connected to a network (or the Internet), allow it to boot from a community-organized database of operating systems.

# How To

> It depends. tm

## Get the netboot

### LKRN

### ISO

## Debian

### Mint: Debian Version

Modify the grub file to add a netboot entry. Use the end of the dedicated custom shell script inside of `grub.d`

Adjust below if using UEFI versus legacy Boot, or if GRUB goes directly to /boot instead of /

`/etc/grub.d/40_custom`

```cfg
menuentry "netboot.xyz" {
    linux16 /netboot.xyz.lkrn
    linuxefi /boot/netboot.xyz.lkrn  # use this for UEFI
}
```

## Update grub

### Ubuntu / Debian

```bash
sudo update-grub
```

### Fedora

```bash
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
```
# Reference

[The main netboot website](https://netboot.xyz/)
