# Figuring out the local area network

Tags: [[networking]] [[linux]] [[computers]]

# Find devices and their information

## Windows

```cmd
arp -a
```
> `arp` cache lists IP and MAC addresses of last communicated devices.

```cmd
nslookup <IP>
```

> `nslookup` provides hostname information.

```cmd
for /l %i in (1,1,254) do ping -n 1 192.168.1.%i > nul
```

> This command will attempt to touch all possible IP addresses on this subnet.

## Linux
