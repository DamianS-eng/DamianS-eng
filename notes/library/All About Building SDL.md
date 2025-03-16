# Preinstall

## Arch/Fedora
```bash
sudo yum install gcc git-core make cmake \
alsa-lib-devel pulseaudio-libs-devel nas-devel pipewire-devel \
libX11-devel libXext-devel libXrandr-devel libXcursor-devel libXfixes-devel \
libXi-devel libXScrnSaver-devel dbus-devel ibus-devel \
systemd-devel mesa-libGL-devel libxkbcommon-devel mesa-libGLES-devel \
mesa-libEGL-devel vulkan-devel wayland-devel wayland-protocols-devel \
libdrm-devel mesa-libgbm-devel libusb-devel libdecor-devel \
pipewire-jack-audio-connection-kit-devel \
kernel-devel libcxx-devel
```


## Debian

## Pacman

```bash
pacman -S base-devel mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-ninja mingw-w64-ucrt-x86_64-cmake mingw-w64-ucrt-x86_64-sdl3
```
### Msys2

Use the UCRT64 syntax.
# Start

- make a build directory
- use cmake to build
- use make

```bash
cd ~/dev/SDL
mkdir build && cd build/
cmake ..
make -j$(nproc)
```

## Optional

```bash
cmake .. -DSDL_EXAMPLES=On
```
# Install

```bash
# make install
```

# Build Something With SDL3

- g++
- Link library directory
- Link shared resource

```bash
g++ {{input}}.c{{pp}} -o {{output}} -L {{/SDL/build}} -lSDL3
```

A better way is to install to make it easier to find the path for resources to link to the compiled program.

# References

[Mike Shah Course](https://www.youtube.com/watch?v=1S5qlQ7U34M)
[Glusoft](https://glusoft.com/sdl3-tutorials/install-sdl3-linux/)
[Migration Checklist](https://wiki.libsdl.org/SDL3/README/migration)
