# What is ZRAM and ZSWAP

Zram is a Linux kernel module to optimize the amount of ram and swap space on machines by compressing them, effectively increasing available operating load.

> __Disclaimer__ needs testing

# Setup

```bash
sudo modprobe zram
```

> Assume specified size is 2G

```bash
echo lz4 > /sys/block/zram0/comp_algorithm
echo 2G | sudo tee /sys/block/zram0/disksize
sudo mkswap /dev/zram0
sudo swapon /dev/zram0
```

## Debian

### Setup

```bash
sudo apt install util-linux zram-config
```

### Configure

```bash
zramctl
```

## Arch

> Arch tends to configure zram via systemd

### Verify

```bash
swapon --show
zramctl
```

# Zram or Traditional Swap

Zram works well for speed. It's highly recommended for responsiveness.

Tradtional swap is a safety net that can help mediate out-of-memory spikes, and is vital for proper laptop hibernation.

# References

- [Arch Wiki](https://archlinux.org/index.php?title=Zram)
- [Fosspost Blog](https://fosspost.org/enable-zram-on-linux-better-system-performance)
- [YouTube short by Framework channel](https://youtu.be/)
