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
```bash
sudo apt-get install build-essential git make \
pkg-config cmake ninja-build gnome-desktop-testing libasound2-dev libpulse-dev \
libaudio-dev libjack-dev libsndio-dev libx11-dev libxext-dev \
libxrandr-dev libxcursor-dev libxfixes-dev libxi-dev libxss-dev libxtst-dev \
libxkbcommon-dev libdrm-dev libgbm-dev libgl1-mesa-dev libgles2-mesa-dev \
libegl1-mesa-dev libdbus-1-dev libibus-1.0-dev libudev-dev \
libpipewire-0.3-dev libwayland-dev libdecor-0-dev liburing-dev
```

## Pacman

```bash
pacman -S base-devel mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-ninja mingw-w64-ucrt-x86_64-cmake mingw-w64-ucrt-x86_64-sdl3
```
### Msys2

Use the UCRT64 syntax.

# Clone Repo

```bash
git clone https://github.com/libsdl-org/SDL.git
```

# Start

1. make a build directory
1. use cmake to build
1. use make

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
## Static Libary
```bash
cmake .. -DSDL_SHARED=ON -DSDL_STATIC=ON
```

# Install

```bash
# make install
```

# Build Something With SDL3

- g++
- Link library directory
  - -I `/SDL/include`
- Link shared resource
  - -L `libSDL3.so`

```bash
g++ {{input}}.c{{pp}} -o {{output}} -I/path/to/SDL/include -L{{/SDL/lib}} -lSDL3
```

A better way is to install to make it easier to find the path for resources to link to the compiled program.

# Game Loop

Game engines tend to follow this formula:

```
FUNCTION SETUP()
	/* call once
	...
	*/
END

FUNCTION UPDATE()
	/* once per frame
	...
	*/
END

FUNCTION DRAW()
	/* once per frame
	...
	*/
END
```

```
SETUP()
WHILE (TRUE) DO
	UPDATE()
	DRAW()
	PROCESS_INPUT()
	/* debate on where process input happens
END
```

```C
int main(int argc, char **argv) {
    initialize();
    while (keep_running()) {
        handle_new_events();
        do_one_frame_of_stuff();
    }
    deinitialize();
}
```


## Deterministic & Independent of Hardware
```
/* Find:
 - Change in time between loop execution (Delta Time)
Use:
 - fixed frequency of updates (Tick Rate) (Update Per Second)
*/
while (running)
{
    deltaTime = timeNow - timeLastUpdate
    timeLastUpdate += deltaTime
    timeAccumulated += deltaTime
    while (timeAccumulated > tickRate) {
        update(step)
        timeAccumulated -= tickRate
    }
    draw();
    handle_new_events();
}
```

While this black box loop works for engines and simple programs, SDL has access to callback functions dedicated to their own responsibilities to initializing, processing and handling everything in the program.

## SDL_MAIN_USE_CALLBACKS

```C
#define SDL_MAIN_USE_CALLBACKS 1 /* use the callbacks instead of main() */
#include <SDL3/SDL.h>
#include <SDL3/SDL_main.h>

typedef struct
{
    SDL_Window *window;
    SDL_Renderer *renderer;
    SnakeContext snake_ctx;
    Uint64 last_step;
} AppState;
```

### SDL_AppInit

```C
SDL_AppResult SDL_AppInit(void **appstate, int argc, char *argv[]) {
	if (!SDL_INIT(SDL_INIT_VIDEO)) { return SDL_APP_FAILURE; }
    AppState *as = (AppState *)SDL_calloc(1, sizeof(AppState));
    if (!as) {
        return SDL_APP_FAILURE;
    }
    *appstate = as;
    return SDL_APP_CONTINUE;
}
```
### SDL_AppIterate

```C
SDL_AppResult SDL_AppIterate(void *appstate) {
	Appstate *as = appstate;
	static Uint64 past = 0;
	Uint64 now = SDL_GetTicks();
	Uint64 DeltaTime = now - past;
	/*
	update()
	SDL_Render...
	*/
	past = now;
	return SDL_APP_CONTINUE;
}
```

### SDL_AppEvent

```C
SDL_AppResult SDL_AppEvent(void *appstate, SDL_Event *event)
{
	switch (event -> type) {
	case SDL_EVENT_QUIT:
		return SDL_APP_SUCCESS;
		/*
		add other SDL EVENTS in this switch statement, and return resolution of event handlers
		*/
	default:
		break;
	}
	return SDL_APP_CONTINUE;
}
```
### Handle Event

```C
static SDL_AppResult handle_key_event_(GameContext *ctx, SDL_Scancode key_code) {
	if ( key_code == SDL_SCANCODE_ESCAPE ) { return SDL_APP_SUCCESS; }
	return SDL_APP_CONTINUE;
}
```

### SDL_AppQuit
```C
void SDL_AppQuit(void *appstate, SDL_AppResult result)
{
/*
	...cleanup...
*/
    if (appstate != NULL) {
        AppState *as = (AppState *)appstate;
        SDL_DestroyRenderer(as->renderer);
        SDL_DestroyWindow(as->window);
        SDL_free(as);
    }
}
```
## Frames Per Second (FPS)
# References

- [Mike Shah Course](https://www.youtube.com/watch?v=1S5qlQ7U34M)
- [Glusoft](https://glusoft.com/sdl3-tutorials/install-sdl3-linux/)
- [Main callbacks](https://wiki.libsdl.org/SDL3/README/main-functions)
- [Migration Checklist](https://wiki.libsdl.org/SDL3/README/migration)
- [Pikuma Game Loop Tutorial](https://www.youtube.com/watch?v=XfZ6WrV5Z7Y)
- [SDL Install Markdown](https://github.com/libsdl-org/SDL/blob/main/INSTALL.md)
- [Mike Shah Course](https://www.youtube.com/watch?v=1S5qlQ7U34M)
- [Glusoft](https://glusoft.com/sdl3-tutorials/install-sdl3-linux/)
- [Migration Checklist](https://wiki.libsdl.org/SDL3/README/migration)
- [Lazy Foo Tutorials](https://lazyfoo.net/tutorials/SDL3/)
