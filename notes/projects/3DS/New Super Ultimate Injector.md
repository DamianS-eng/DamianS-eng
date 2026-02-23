# Virtual Console Entries for a Nintendo 3DS with Custom Firmware

Especially with the deprecation of the fabled Nintendo eShop, this is the only way to provide games onto the built-in emulation services on a Nintendo 3DS.

This guide will talk about one tool that is used to create the games playable on the portable consoles.

# Setup

Use the .zip program "New Super Ultimate Injector for 3DS". It's a Windows application built using Vistual Studio.

## Connect to 3DS

`Tools` -> `Options`

Under "3DS IP address", provide one of two possible ip addresses of the 3DS.

On the 3DS, the Homebrew Launcher application running under Rosalina v2.4.1 should provide the 3DS' IP address.

> Press the Y button while in that app to toggle to the 3dslink Netloader, which should show its IP address and a Port Number.

## BIOS

The BIOS files for the following are required

- Game Boy Advance
- Famicom Disk System
- Atari Lynx
- Magnavox Odyssey
- Playstation 1

# Create a CIA (game)

`File` -> `New` -> Pick a console.

`Project` -> `Load ROM` -> Choose the game.

## Customization

> Upon choosing a game, the app will attempt to connect to the Internet and find an existing layout to customize the application. This may fail as an "Error! Unable to downoad image!", for example.
>
> Temporarily download the game's title screen, then "Load image from file".

### Banner Sound

The jingle that plays when selecting the game from the home menu defaults to the console it emulates, but it can be changed with respect to the game's intro jingle, or something else remarkable. The limit for the banner sound is 3 seconds, in .wav format.

## Console-Specific Tweaks

### Game Boy Advance

# Export CIA (game)

## Wirelessly

After exporting the CIA to the outputs folder, it will automatically attempt to connect to the 3DS on the network, at the IP address specified in the settings. Open the FBI app on the 3DS, and enable Remote Install. Keep an eye on pop-ups on the PC that indicate if a problem occurred.

## Via FTP

> In the event wireless CIA exports fail, consider using an FTP client tool like Filezilla, and the 3DS' server app `FTPD`.
>
> The IP and ports used for both the New Super Ultimate tool and FTP are the same.
>
> FYI, this is insecure FTP, but it's only possible using the 3DS with an active FTP server. Just close the app on the 3DS when no more transfers are needed.

## Via SD Card

Of course, as a last resort, remove the SD card from the 3DS, and place the exported CIA on there. Then reinsert back into the 3DS and install via the FBI app. 

# References

- [Another guide](https://3ds.eiphax.tech/nsui)
- [One example of explaning Game Boy Advance save file types](https://deepwiki.com/libretro/vba-next/2.3-save-types-and-game-state)
