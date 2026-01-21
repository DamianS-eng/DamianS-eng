# MakeMKV

References: [[ blu-ray ]] [[Linux]] [[ source ]]

# About the Bash Script

This is a quick way to get the makemkv tool and command-line program set up on your Linux instance.

## Steps

1. Check distro
2. Update required packages
3. Set up build directory
4. Locate latest version
5. Retrieve `oss` and `bin` archives for latest version.
6. Configure with `oss`
7. Make and install `bin`
8. Clean up build directory

# Flash Blu-Ray Drive

> In the event that the hardware blu-ray drive cannot read or extract content, a firmware flash may be required.
> 
> **PROCEED WITH CAUTION.
> **THIS HAS _NOT_ BEEN TESTED

```powershell
.\makemkvcon64.exe f --all-yes -d E: rawflash -i path\to\HL-DT-ST-BD-RE_WH16NS60-1.02-NM00100-211810291936.bin
```

# MakeMKV Trial Expired

If you get an error message while loading MakeMKV but there is no newer version to install, the beta key is likely expired.

[Check this forum post](https://forum.makemkv.com/forum/viewtopic.php?f=5&t=1053) for the latest beta key, then attempt to activate it in the GUI, or use

```bash
makemkvcon reg <your-beta-key-here>
```

# References

- [MakeMKV website](https://www.makemkv.com/download)
- [Info about Linux build](http://www.makemkv.com/forum/viewtopic.php?f=3&t=224)
- [Usage txt](https://makemkv.com/developers/usage.txt)
