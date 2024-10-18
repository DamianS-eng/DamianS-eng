Tags: [[Splatoon]] [[s3s]]

I have a way to upload my Splatoon 3 battle and Salmon Run stats to a website.

While the Nintendo smart phone app keeps track of stats automatically, it caps at the last 50 battles, and truncates between seasons. This tool aggregates ALL uploaded data to a website visible to all.

# Get It Set Up on Android

## Tools

## Software

[FrozenPandaMan's s3s tool on GitHub](https://github.com/frozenpandaman/s3s)

On Android:
	[Termux](https://f-droid.org/en/packages/com.termux/)

## Steps

### First Time

In Termux,
- Install git and python 
	- `pkg install {git} {python}`
- Clone the s3s repository from GitHub
- Follow the directions in the Readme. 
	- Use Python to download the requirements using Pip
	- `python s3s.py -r`
	- Follow the directions. Handy to have the API key for [stat.ink website](https://stat.ink) and the passkey for the Nintendo account ready.
#### Setup Recurring Script

Create a bash script `.sh` inside the home directory, in the hidden `.shortcuts` folder.
- Usually, it's `/data/data/com.termux/files/home`, but the shorthand `~` should work.
- Check using ` ls -a `
- `cd ~/.shortcuts & touch Splatoon_upload.sh`
Now, write the following in that script file.
```bash
cd {s3s folder}
python s3s.py -r
```
You can test in Termux with `./Splatoon_upload.sh`.
This script should be visible in Termux Widget on the Android Home screen.
### After playing some matches,

With an Internet Connection, run the batch script.

## Issues?

Be proactive about the messages that pop up when running the script.
Sometimes, the key produced to pull the Nintendo smart phone app API expires and needs to be redone. It's usually done automatically.
This tool may need updates. `cd {s3s folder}` and `git pull`.
You can't use this tool if the Nintendo Online membership expires.