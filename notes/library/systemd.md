# Systemd

The suite of basic building blocks for starting and managing processes.

## Service

```verilog
[Unit]
Description=

[Service]
Type={{[simple, oneshot}}
WorkingDirectory=/path/to
ExecStart=/path/to/foo.sh
Restart=always
RestartSec=1hour

[Install]
WantedBy=default.target
```

## Timers

```verilog
[Unit]
Description=

[Timer]
OnCalendar=*-*-* ##:##:## UTC
Unit=foo.service

[Install]
WantedBy=timers.target
```

## Tools

### systemctl
```bash
systemctl status foo.service
```

### journalctl
```bash
sudo journalctl -u foo.service -e
```

### mailx
...

## Uses elsewhere

### Python

```python
import python-systemd
```

# Sources

- [io Site](https://systemd.io/)
- [Systemd Manual](https://freedesktop.org/software/systemd)
- [About Timers](https://www.blunix.com/blog/ultimate-tutorial-about-systemd-timers.html)
- [Red Hat Tutorial](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/system_administrators_guide/chap-managing_services_with_systemd#sect-Managing_Services_with_systemd-Introduction)
