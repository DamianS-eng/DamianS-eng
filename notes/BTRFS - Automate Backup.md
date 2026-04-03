Tags: [[btrfs]] [[linux]]

# Basics

A BTRFS subvolume is a logical partition in a filesystem. It's like a virtual filesystem with its own directory tree, sharing the storage of its parent.

Subvolumes are independent; they can be mounted separately, and one's data doesn't affect another. They are the target of __snapshots__, which are ideal for backups.

```bash
# list subvolumes
btrfs subvolume list /where/is/the/btrfs
```
__Snapshots__ are copies of subvolumes at a certain time. They can be read-write or read-only; read-write are used for testing changes, while read-only are useful for backups.

# Strategies

- Daily read-only snapshots of `/home` and `root`, great for recovering state of time __on the same, functional disk__.
- Transfer snapshots incrementally to external sources, safeguard from local disk compromise.
- One-time quick read-write backup, in case trying out experimental or dramatic software changes.
## Backup Steps

1. Organize snapshots; create a directory to place them all.
2. Create a read-only snapshot; use a bash script (or similar) to obtain current date, and append to the filename.
3. Automate with a scheduler (cron, systemd, etc)

## Remote Backup

1. Establish secure shell connection between local and remote.
2. Use a bash script (or similar) to obtain current date, to be appended to remote filename.
3. Send snapshot to remote, and have the script keep track of old snapshot name.
4. The next snapshot sent should reference the first snapshot name, and the send command specifies an incremental transfer.

## Restore Steps

### One or finite files

1. Mount the snapshot, create a temporary directory if needed.
2. Copy requested individual files from snapshot.
3. Unmount snapshot.

### Entire subvolume

1. Rename corrupted subvolume
2. Create a read-write copy of snapshot
3. Verify restore

### From remote backup

1. Create Btrfs filesystem on replacement disk & mount.
2. Receive snapshot from remote.
3. Convert to read-write subvolume to use.
# Tools


```bash
# get the current date; append this to filename
curr_snapshot_date = "$(date +%Y%m%d_%H%M)"
```
```bash
# Create a new btrfs filesystem
mkfs.btrfs /dev/sdb1
```

```bash
# create a read-only snapshot
btrfs subvolume snapshot -r /source/subvol /backup/subvol_date
```

```bash
# delete a snapshot
btrfs subvolume delete /requested/subvol
```

```bash
# send a snapshot to a remote server via ssh
btrfs send /source/snapshots/snap1 | ssh user@remote "btrfs receive /receive/snapshots/snap1"
```

```bash
# receive snapshot from remote server
ssh user@backup "btrfs send /mnt/backup/btrfs_snapshots/home_snap_date" | btrfs receive /mnt/new_btrfs
```

> Could the above be done with rsync instead...?
> Yes.

```bash
# send to non-Btrfs external storage
rsync -aAX --delete /source/btrfs/home /mnt/external/home_backup
```

__Automation Tools__
- Snapper
- Timeshift
- Btrbk
# Create Backups

1. ```bash
   # create backup directory
   ```

# Restore Data

# Best Practices

1. Prioritize read-only snapshots
2. Automate snapshots
3. Test restores regularly
4. Limit snapshot retention
5. Monitor disk space
6. Encrypt external backups
7. 3 copies of data, 2 different media, 1 offsite

# Troubleshooting

> Once a problem emerges, pursue a solution. When found, put it here.

## "btrfs send: not a snapshot"

> You can only send snapshots, not a subvolume.

## Corrupted snapshot
# References

-[Linux Vault Guide](https://thelinuxvault.net/linux-backup-recovery/a-practical-guide-to-btrfs-backup-and-restore/)
-[BTRFS Wiki](https://btrfs.wiki.kernel.org)