# Issue

`rm` deletes whatever file is passed to it, without asking for confirmation.

# Solutions

## Modify `.bashrc`

```bash
alias rm='rm -i'
```

## 

```bash
sudo chattr -R +i ${directory}
```

Tags: [[Linux]]

# References

[Tutorial](https://linuxbsdos.com/2024/10/26/simple-trick-protects-you-from-accidentally-deleting-files-in-linux/)
