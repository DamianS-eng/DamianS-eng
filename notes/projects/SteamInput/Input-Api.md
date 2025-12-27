The Steam Input API is designed to allow developers to  easily enable full support for Steam Input devices in game. This means:

- The game uses proper controller-specific glyphs when showing in-game prompts.
- The configurator uses in-game actions that the player performs in game, instead of keys or buttons.
- An official configuration for the controllers the game supports is published.
- The game doesn't restrict the user's ability to customize their controls, even allowing any mix of mouse, keyboard or gamepad input simultaneously.
- The game calls the API to automatically bring up the text entry UI when needing to type.
- The game has no launchers, or launchers that require keyboard or mouse.

These are other details to ensure a good experience:

- In Full HD (1920 x 1080), the font is a minimunm of 24px.
- Start game in fullscreen by default when a specific Steam Environment variable is set.
- Detect the user's screen resolution and set the game resolution to match it.

# Consider

## TL;DR:

- Always include a mouse-style action for cursor or preision camera controls.
  - **Allow gamepad and mouse input simultaneously.**
  - If you cannot allow simultaneous gamepad and mouse, at least make deadzone, acceleration, and sensitivity configurable.
  - Allow VERY HIGH sensitivities. This is good, not *bad*.
  - Allow no deadzone as an option.
  - Allow linear acceleration curve.
- Avoid using the system mouse.
- Do not filter incoming Steam Input data, or use a dedicated sensitivity option for Steam Input that's distinct from the system mouse.
- *Implement separate mouse-style and joystick-style camera actions.* not sure...
- Use SDL 2.0.8, prefer SDL 3.
- Allow detection of the device using the API.

## The Five Golden Rules of Input

1. On-screen icons should match the input device.
2. Mouse cursor should match the input device.
3. All devices should work **all** the time.
4. Dpad, analog stick and mouse can all be used to navigate menus.
5. A disconnected gamepad pauses the game.

# Implementing Steam Input API Support

## 1. Create an in-game actions file

1. Download the starting in-game actions (IGA) file.
  - Templates or a sample game file are good references.
3. Place in `$(dirname $(which steam))\controller_config`, renamed to `game_actions_{game AppID}`

The IGA file contains an "actions" section which should list all the in-game action sets (IGAS).

> An IGAS describes all the actions a player can stake within some game context, such as:
>   - On foot
>   - Vehicle
>   - Menu

Each IGAS has its own tab in the configurator. The entry in the IGA file should contain a "title" key and value, as well as:
- StickPadGyro
- AnalogTrigger
- Button

Both StickPadGyro and AnalogTrigger subsections have a list of IGAs that can only be assigned to these kinds of inputs. The Buttons subsections contains IGAs that are bound only to digital inputs.

### Button Action

```json
"<action name>" "#<localization key"
```

- action name: internal name of action in game code
- localization key: name of entry in localization (include the hash #)

### StickPadGyro Action

```json
"<action name>"
  {
    "title  "#localization key"
    "input_mode" "<analog mode>"
  }
```

- `action name` and `localization key` are the same as in Button
- title:
- analog_mode: how to interpret the data before passing from API to game
  - absolute_mouse: behave like a mouse
  - joystick_move: move a character or around a ring

> **Pretty please.** Always include an `absolute_mouse` input mode type for your action meant for camera control in a first/third person game, or cursor control in a 2D game or menu IGAS.

> `os_mouse` is an optional parameter. Setting this to "1" will cause the input to pass to the operating system. This is **strongly discouraged**; if it must be used to patch a bug with accessing a file manager, apply this to as few action layers or menu IGAS as possible.

#### Example

```json
"menu_mouse"
  {
    "title"  "Menu_Mouse_Title"
    "input_mode"  "absolute_mouse"
  }
"camera_mouse"
  {
    "title"  "Camera_Mouse"
    "input_mode"  "absolute_mouse"
  }
"camera_joystick"
  {
    "title"  "Camera_Joystick"
    "input_mode"  "joystick_move"
  }
```

### Localization

```json
"localization"
  {
    "english"
    {
      "Menu_Mouse_Title"  "Menu Mouse"
      "Camera_Mouse"  "Camera Mouse"
      "Camera_Joystick"  "Camera Joystick"
    }
    "spanish"
    {
    }
  }
```

### Full Example

```json
"StickPadGyro"
  {
    "title"  "#Action_Camera"
    "input_mode"  "absolute_mouse"
  }
"Button"
  {
    "Jump" "#Action_Jump"
  }
```

### Titles & Descriptions

```json
"localization"
  {
    "english"
    {
      "Title_Config1"  "Official Configuration"
      "Description_Config1"  "This config was created by the developers of Game."
      "title_Config2"  "Official Southpaw Configuration"
      "Description_Config2"  "This config was set up for southpaw users."
      "title_Config3"  "Official Gyro Configuration"
      "Description_Config3"  "This config was set up for gamepads with a gyroscope."

      "Action_Jump"  "Jump"
      "Action_Camera"  "Camera"
    }
    "spanish"
    {
      ...
    }
  }
```

## 2. Use the configurator to create a default configuration.

Open the Steam Deck UI Gaming Mode. Navigate to the game's details, select "Manage Game" and then "Configure Controller".

Use the configurator to create a default configuration, and save it privately.

## 3. Use the API to read actions from the controller and retrieve appropriate glyps for display.

Use the latest Steamworks API, and lock Steam onto your game via its id.

`steam://forceinputappid//<your_game's_AppID>`

1. On startup, initalize Steam Input with `|SteamInput::Init`
2. Resolve action and set names into handles, and use them to identify actions and sets.
   - `|SteamInput::GetActionSetHandle`
   - `|SteamInput::GetDigitalActionHandle`
   - `|SteamInput::GetAnalogActionHandle`
3. Use `|SteamInput::GetConnectedControllers` to detect existing controllers. Also, `|SteamInput::GetInputTypeForHandle`to identify them.
4. Use `|SteamInput::ActivateActionSet` or `|SteamInput::DeactivateActionSet` to control which controllers are bound to different action sets. Further apply layers with `|SteamInput::ActivateActionSetLayer` or `|SteamInput::DeactivateActionSetLayer`
5. Run '|SteamInput::RunFrame` right before accessing controller data, or call `SteamAPI_RunCallbacks`
6. Use `|SteamInput::GetDigitalActionData` and `|SteamInput::GetAnalogActionData`

> `|SteamInput::RunFrame` is a cheap call to run every frame.

# References

- [Steamworks Documentation - Getting Started for Developers](https://partner.steamgames.com/doc/features/steam_controller/getting_started_for_devs)
- [Steamworks Documentation - Legacy Bindings](https://partner.steamgames.com/doc/features/steam_controller/legacy_mode)
