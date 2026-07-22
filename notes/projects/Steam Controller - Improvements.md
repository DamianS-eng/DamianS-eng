A central note about the improvements made to the Steam Controller.

# Bumpers

> These are the worst bumpers on any PC controller.

## The Problem

The long, rectangular flange hanging off of the trigger assembly can break off, creating total failure in actuating the button.

### Details

The bumper buttons are long and skinny buttons soldered directly to the motherboard, on the corner hanging on the edge. They are actuated by a flat flange hanging off of the plastic trigger assembly, pushed by a nearly immovable PVC piece (made of two pieces) from the outside of the top. This same outer piece surrounds the Micro USB port.

## Attempted Solution

The trigger assembly CAD and STL files are available on the Internet and able to be printed as replacable components.

Replacing a piece that's meant to resolve the bumper function involves completely disassembling the controller to remove the top piece and motherboard out of the chassis. The trigger mechanism needs to be migrated to the replacement piece, ensuring that the piece's flange hangs over the button on the motherboard during reassembly.

## Next Solution

Instead of relying on actuating the button physically, consider a touch sensor in leiu of the button.

### Pieces

The custom PCB for a touch sensor involves a conductive region facing the underside of the outer button piece, capacitors and transistors to compare the conductance paths interpreting if a finger is pressed above the board. An inverter is likely needed to reverse the activation logic, and this board needs to be connected to the main motherboard's power supply.

### Installation

A different top piece needs to be created with this removed: the physical structure which would have pushed onto the trigger assembly's rectangular flange. In this space, a touch surface with the custom pcb logic will be mounted. The pcb needs to be soldered to reliable test points on the motherboard for power, and the button output trace from the button and its ground point need to be placed in parallel to the button. Of course, use thin or flat wire when securing against the motherboard with plenty of slack and secure the connections with kapton tape.  

# References

- [Thingiverse replacements parts](#)
- [iFixit guide on bumper replacement](#)
- [Hackaday blog about touch sensor solution](#)
- [Ramblecan YouTube video on Bumper mods](#)
