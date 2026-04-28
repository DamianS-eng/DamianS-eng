Tags: [[linux]]

# Set up to display on terminal

# All the types of servers/managers

- Display Manger
- Window Manager
- Display Server
- Desktop Environment

## Display Manager

> This command assumes your session has access to systemd.

```bash
systemctl status display-manager
```

```bash
grep 'ExecStart=' /etc/systemd/system/display-manager.service
```

## Window Manager

```bash
wmctrl -m
```

## Display Server

```bash
ps -e | grep -E 'Xorg|Xwayland|wayland'
```

### Wayland

```
echo $WAYLAND_DISPLAY
```

### X11

```bash
echo $DISPLAY
```


## Desktop Environment

```bash
echo $XDG_CURRENT_DESKTOP
```

```bash
echo $DESKTOP_SESSION
```