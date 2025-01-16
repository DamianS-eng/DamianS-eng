# About the Message of the Day

## That message that pops up when you ssh to a linux machine.

Tags: [[Linux]][[configuration]]

## Where is the file to configure?

### Linked File

```bash
/etc/motd -> /var/run/motd
```

### Directory of MotD scripts

```bash
/etc/update-motd.d/

00-header
10-help-text
50-motd-news
80-esm
91-release-upgrade
```

# Sources

[Serverfault discussion](https://serverfault.com/questions/407033)
