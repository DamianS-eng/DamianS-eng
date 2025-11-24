# Set Up Termux on Android

## First, what is Termux?

Termux is a command line interface on Arnoid mobile phones. This is useful for running linux programs for automation or specfiic functions not functionable with apps, either from the Play Store or sideloaded from F-droid.

## Install

Use F-Droid to install Termux, then search for Termux:Widget Shortcuts, to allow programs to run from a list on the home screen.

## Git

```bash
pkg add git
git config --global user.name "{{ username }}"
git config --global user.email "{{ email }}"
git config --global core.editor "{{ vi/emacs }}"
```

If a git directory is stored somewhere outside Termux (like the Documents or Downloads folder), run this to permit access:

```bash
termux-setup-storage
```

Then, check the termux home directory for a folder like `storage/shared`

### Safe Directory

```bash
git config --global --add safe.directory {{ path/to/git/folder}}
```


## SSH

```bash
pkg add ssh
```

Then, check for the hidden `.ssh` hidden directory for the config file.

A default SSH key is located at `/data/data/com.termux/files/usr/etc/ssh/ssh_host_ecdsa_key.pub`. Ideally, set up a shortcut to the public key.

## Shortcuts

After installing the Shortcuts Widget, check home for a hidden directory called `.shortcuts`. Files here will be found in the widget list.
