# Everything about the Beitong

# Beitong Controller

## Beitong Pangu

This is a multipurpose controller with hot-swappable modules. Modules include:

- D-Pad
- Buttons
- Thumbstick
- Touchpad
- Steering Wheel

## BEITONG Android App

Download [here]().

### Setup

#### Beitong Pangu

1. Ensure the power switch on the back of the controller is turned off.
2. Set the mode switch to APP (all the way to the right), then switch the power on.
3. The middle controller LED will flash. If Bluetooth is enabled and already paired once with the controller, the flashing will stop when it connects successfully.
4. In the main app, go to the bottom-right button.
 - If the controller is not connected via Bluetooth, it will say __Disabled__
 - If the controller is connected, it will start with __Not active__
 - If connected, press that button, then press the controller name to enter its settings menu.

### Configuration

[App Link](https://betopgame.com/secondAssistant/#/?type=pg01a&language=en)

#### Main Menu

- __Top Left__ - Back to connection screen
- __Top Right__ - Device Information
- Under Top Right - Battery Level (press for description)
- __Controller Mode__ - Switch between configuring for Windows or Nintendo Switch
- __Presets__ - There are four predetermined modes:
  - Standard
  - Shooting
  - Racing
  - Action
  > You must have the controller set up its modules in Xbox or Playstation layout to use these presets. Otherwise, use **Custom**.
  - **Custom**
- Overclocking Mode - toggle
- "Functionalarea" - adjust each module
- Trigger Settings - set the trigger deadzones
- Vibration - Choose a vibration intensity level for:
  - Overall
  - Grips
  - Triggers
  > To disable vibration permanently, set intensity to 1Level
  - Vibration Mode
    - Grip Vibration ( the trigger respecting the side with the grip will also vibrate )
    - Custom Trigger Travel ( if trigger is pressed beyond a value, it will vibrate )
    - Native Game Vibration ( trigger vibration reacts to supported games in Bluetooth mode )
- Lights - RGB on the logo and the grips
  - Light Type:
    - Breathe - Choose one color, and the light will glow that color, dimming and brightening in a loop
    - Always - Light stays on in one selected color
    - Streamer - Light will alternate colors over time
    - Gradient - Choose three colors; the light will switch between these choices.
  - Brightness - how bright the LED is
  - Light Status
    - Turn On All
    - Only turn off the grip
    - Only turn off the (top middle) indicator
    - Turn Off All
  - Light Frequency ( how fast the light will breathe or change colors )
  - Flash when vibrating ( the light makes a rapid flashing effect when the controller vibrates )
- Somatosensory ( Motion Control )
  - Assign to:
    - Joystick
    - Button
    - Mouse
  - Enable Montion Control :
    - Always On
    - Hold to Enable
    - Press to Enable (toggle)
  - Trigger Button - which input activates the gyro response
  - Joystick Mapping: Left or Right Joystick
  - Mapping Mode: FPS ( Yaw ) or Racing ( Roll )
  - Motion Sensitivity - How much output to joystick from given motion
  - Joystick Compensation - Set at percentage above joystick deadzone
  - Horizontal / Vertical Flip - reverse output axis from given motion
- Othen ( Other Settings )
  - Sleep Time (in minutes)
  > Set Sleep Time to 0 minues to prevent sleep from inactivity 

### FunctionalArea

> Choose the module installed on the controller based on its location:

- Top Left
- Bottom Left
- Bottom Right
- Top Right

Current Config:: { name of the installed module }

- Mapping Objective

#### D-Pad

#### Button Pad

#### Joystick

#### Haptic Feedback Touchpad

> This module's settings page is currently in Chinese; it's not localized properly.

__Mapping Objective__:
 - Left Joystick
 - Right Joystick
 - Mouse
 - Button

__Mapping Mode__: Toggle
 - Movement ( continuous ) ( for character movement )
 - Field of View ( instantaneous ) ( for looking around )

__Haptic Feedback Touchpad Button Mapping__: Touchpad Click

__Haptic Feedback Touchpad Curve__:
  - Default ( linear )
  - Delayed Input ( starts linearly up to deadzone, then slow rise, ramps up at end )
  - Instant Response ( sharp rise in joystick output, to counter deadzone )
  - High Performance ( starts linearly, sharp rise, slow ramp up at end )
  - Balanced ( up to 50% is normal, slow rise until 80%, sharp rise at end )
  - Customized ( draw the curve yourself )
   

#### Haptic Feedback Steering Wheel

> This module takes up two module slots, and must be installed and configured under __Bottom Left__.

> This module's settings page is currently in Chinese; it's not localized properly.

__Rotation Angle Setting__

Set the total angle of steering wheel rotation.

> If set to 180 degrees, you can turn the wheel to the left or right 90 degrees

**Limiting Effect**: 

> When the steering wheel is turned beyond the total angle, there's adjustable resistance for further rotation.
>
> The resistance decreases every 180 degree increase in rotation angle, so the wheel can quickly return to the operating angle.

__Angle Limit Resistance__: Set a limit effect to counteract resistance
 - Weak
 - Middle
 - Powerful

__Mode Selection__: 
 - Standard Mode ( wheel maps to left analog stick, force feedback only supports custom )
 - Immersive Mode ( input is steering wheel, force feedback custom or native )

__Force Feedback Effect__:

__Feedback Strength__:
  - Native ( get feedback from game )
  - Custom ( customize damping of steering wheel rotation )


__Steering Wheel Curve__:
 - Default
 - Delayed Input
 - High Performance
 - Customize

__Steering Wheel Center Deadzone__

__Steering Wheel Edge Constraint__: Adjust the maximum output angle of the steering wheel to prevent oversteering

__Steering Wheel Centering__: Set the current steering wheel deflection angle to zero degrees
> So... calibrate?

__working Mode__: Enable steering wheel feedback
 - Closure
 - Turn On
