# Mono Runtime

Tags: [[steam deck]] [[linux]] [[bizhawk]] [[archipelago]]

> Mono runtime is required for running Bizhawk, an expansive emulator with Lua scripting and outbound network connectivity, useful for playing randomized multiworld variations of classic games.

> Wine and Proton are not officially supported by the EmuHawk team, so prepare mono on the Steam Deck through Desktop Mode.

> If you have not already, prepare a sudo password on the deck using this in terminal:

`passwd`

1. Download and extract Bizhawk.
2. In Konsole, run `./EmuHawkMono.sh`, a bash script that wraps the executable in mono. It should complain about mono not being found.
3. Disable steamos readonly protection:
   ```bash
   sudo steamos-readonly disable
   ```
4. Prep pacman
   ```bash
   sudo pacman-key --init
   sudo pacman-key --populate archlinux holo
   sudo pacman -S mono
   ```
5. Re-enable steamos write protection:
   ```bash
   sudo steamos-readonly disable
   ```

Now you can run `EmuHawkMono.sh`.

> When Archipelago instructions using this emulator ever call out `EmuHawk.exe`, use the `Mono.sh` instead, and make sure the launcher can find the script and have it executable.
