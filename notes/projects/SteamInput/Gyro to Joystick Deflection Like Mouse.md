Finally, some attempt at an explanation about the mode to emulate a joystick from a controller's gyroscopic motion sensor.

- Mouse Joystick
- Mouse-Like Joystick
- Gyro to Joystick Deflection

## Prepare the game

Go to the game's settings, and provide the following changes:

1. `Max` Joystick Sensitivity. To the highest level.
2. Remove `Max Threshold Boost`.
3. Remove Joystick `Inner Deadzone`, Extend Joystick Outer Deadzone
4. Change Joystick Output Curve to `Linear`.
5. Remove aim assist/magnetism.

> Of course, no game is perfect. It may not provide detailed configuration of stick aiming, or any configuration at all.
>
> In some of these cases, the best one can do is to experiment to identify. And of course, proivde research to the public about a game's quirks.

# Dated Recommendations

> As of 2026, Steam is no longer using the below parameters, so the techniques used here are not worth using in the current iteration of configuration. However, how Steam approaches getting this to work is still useful.

## First-time approach

1. `Max` Gyro Camera Scale
2. `Zero` X & Y Minimum Joystick Output Value, or adjust its value to the game's joystick deadzone
3. `Max` Enhance Small Movement Precision
 
## After first go, tweak

FIXME

# References 

- [Steam Guide by Megaphone](https://steamcommunity.com/sharedfiles/filedetails/?id=2306030526)
