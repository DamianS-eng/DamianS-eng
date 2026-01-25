# Wire a Wii's Bluetooth Module to a PC USB Port

Tags: [[wii]] [[nintendo]] [[USB]] [[bluetooth]]

# Requirements

You will need: 
1. either an external 3.3v source (you can use 2 AA batteries in series) or a linear voltage regulator to reduce the 5v USB voltage.
2. a sync button

# Steps

1. Connect 3.3v to the three orange points in the photo.
  - **DO NOT CONNECT:** 5v USB (red wire) directly to 3.3v.
2. The Wii's SYNC button connects 3.3v to the `sync` line (purple), so a button between these two points is preferred.   

![Wii Bluetooth Module Photo](https://i.imgur.com/rxKxZNt.png)
![Linear Regulator Setup](https://i.imgur.com/DUWsTak.png)

# Notes

> There are currently two known variations of the Wi-Fi module. Test pads may be hidden under the sticker.

# Info

> BCM2045A
> 
> Prodct ID: 0x0305
> 
> Vendor ID: 0x057e (Nintendo Co., Ltd.)
> 
> Speed up to 12 Mb/sec
>
> Manufacturer: Broadcom Corp
>
> Location ID: 0x14200000 / 11

# References

- [Original thread on Dolphin emulator forums](https://forums.dolphin-emu.org/Thread-how-to-wire-a-wii-s-bluetooth-module-to-a-pc-usb-por)
