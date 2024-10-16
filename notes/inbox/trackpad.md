# About

Tags: [[trackpad]][[cirque]][[game controllers]]

This is going to highlight as much as possible about the use of trackpads in game controllers.

## Check out the Steam Controller.

# Requirements

## Microcontroller

- Teensy LC Development Board
- ESP32
- Raspberry Pi Pico RP2040/2350

Write firmware that transfers the position delta from the sensor directly to mouse output.

Could it also be a wide analog range used in DirectInput?

Alternatively, transfer the coordinates of the touch sensor to analog output, for a control stick.

## Communication

### Gamepad Report Descriptor

Create what is called a gamepad usb_hid device with specific descriptions about its type of usage and 

## Components

- MCP4922E/SL
  - This is a digital-analog converter. Give it a reference voltage, and output a voltage from the analog set by the microcontroller.
  - 12-bit, 2 channel (4096 possible values for 2 different analog outputs)
  - Neutral Position: output is half of reference voltage.
  - Bottom Left Position: output is 0v
  - Top Right Position: output is reference voltage.

### SPI

### I2C

## Connections

# References

[I made Steam Controller Joy-Cons](https://youtu.be/6kdYlMjilpLs)
[Use a Rasp Pi Pico as a HID](https://youtu.be/__QZQEOG6tA)
