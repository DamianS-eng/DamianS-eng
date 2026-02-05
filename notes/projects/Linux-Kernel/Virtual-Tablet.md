# What is this about?

Someone gave an idea of how to use a joystick/gamepad device that picks up in evdev and use it in KDE's Krita drawing program.

Analog properties from a joystick/gamepad include its triggers and joysticks. The gyroscopes are possible, but _very_ ambitious and not required.

The catch is: Krita expects a kernel-level stylus, exposed to the kernel as a libinput and then read by Qt. Krita also likely expects "approved" stylus devices.

# The Flow

> [Your real device] → evdev → [your sketchy program] → uinput virtual tablet → libinput → Wayland → Krita

# The Requirements

- Identify the real device
- Get its analog properties
- Do **NOT** interfere with its native input driver
- Create a virtual stylus
- Map found analog properties to needed stylus properties
  - Pressure
  - Tilt
- Toggle Script:
  - Run to start, run again to destroy it

Tags: [[linux]] [[kernel]] [[drivers]] [[virtual]]
