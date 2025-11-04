# Edit Configuration File

Tags: [[Virtual Reality]] [[troubleshooting]]

This seems to be a global configuration file for Steam VR.

> ~/.steam/steam/config/steamvr.vrsettings

# Edit Bindings from Browser

- [Click on this while Steam VR is running](http://127.0.0.1:27062/dashboard/controllerbinding.html)

# Troubleshooting

## Possible Solutions?

According to the deprecated [ALVR troubleshooting wiki](https://github.com/alvr-org/ALVR/wiki/Linux-Troubleshooting):

> SteamVR can't properly update bindings, open menus, and/or eats too much CPU.
> 
> This issue is caused by SteamVR's webserver spamming requests that stall the Chromium UI and cause it to use a lot of CPU.
Fix
> 
> Apply the following patch: `https://github.com/alvr-org/ALVR-Distrobox-Linux-Guide/blob/main/patch_bindings_spam.sh`.
> 
> One-liner assuming the default Steam path for Arch, Fedora: `curl -s https://raw.githubusercontent.com/alvr-org/ALVR-Distrobox-Linux-Guide/main/patch_bindings_spam.sh | sh -s ~/.steam/steam/steamapps/common/SteamVR`.

Consider this [blob](https://github.com/alvr-org/ALVR-Distrobox-Linux-Guide/blob/main/patch_bindings_spam.sh). But this may only be relvant for standalone headsets wirelessly connecting to Steam VR.

# References

- [Troubleshoot WineOpenXR Test Instance](https://github.com/ValveSoftware/Proton/issues/8473)
- [Steam Community Guide for Linux VR](https://steamcommunity.com/sharedfiles/filedetails/?id=2805545613)
- [Guide of compatibile Linux VR Hardare & Software](https://steamcommunity.com/sharedfiles/filedetails/?id=2984005943)
- [About Action Manifests](https://github.com/ValveSoftware/openvr/wiki/Action-manifest)
