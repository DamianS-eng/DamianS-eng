# Netboot

With a PC connected to a network (or the Internet), allow it to boot from a community-organized database of operating systems.

# How To

> It depends. tm

## Get the netboot

### LKRN

### EFI

```bash
wget https://boot.netboot.xyz/ipxe/netboot.xyz.efi -O netboot.xyz.efi
```

### ISO

## Debian

### Mint: Debian Version

Modify the grub file to add a netboot entry. Use the end of the dedicated custom shell script inside of `grub.d`

Adjust below if using UEFI versus legacy Boot, or if GRUB goes directly to /boot instead of /

#### Eric

> grub-install (GRUB) 2.06-13_deb12u2
> 
> uname -r: 6.1.0-52-amd64

`/etc/grub.d/40_custom`

```cfg
menuentry "netboot.xyz" {
    search --no-floppy --file --set=root /EFI/netboot/netboot.xyz.efi
    chainloader /EFI/netboot/netboot.xyz.efi
}
```

## Fedora

```cfg
menuentry "netboot.xyz" {
    linux /netboot.xyz.lkrn
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
