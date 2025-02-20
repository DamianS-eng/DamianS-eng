# WebXR Device On Internet Browsers

Tags: [[virtual reality]] [[internet]]

> This is an experimental technology.

## WebXR:
Unlike the deprecated **WebXR**,
- (virtual) support rendering 3D scenes to hardware for presenting virtual worlds, 
- or (augumented) for adding graphical imagery to the real world.

## WebXR Device API 

The WebXR feature set: 
- choose output device,
- render the 3D scene, and
- respond to motion input controllers.

While WebXR manages the timing, scheduling, and the various points of view relevant when drawing the scene, it does _not_ know how to load and manage models, _nor_ how to render and texture them. 

**That part is entirely up to you.**

## Compatible Devices

A typical XR device can have either 3 or 6 degrees of freedom and might or might not have an external positional sensor.

### 3D headsets
- Vive, Vive Pro, Vive XR Elite, Vive Cosmos, Valve Index

### eyeglasses
- Meta Ray Bands

### mobile phones
- Apple
- Google
- Samsung

# Definitions

## Field of view

## Degrees of freedom

## Session modes

## Math Matricies

# Procedure

1. Check if the device and browser are compatible.
1. Return an interface to client.
1. Client will request activation, then request a session.
1. On resolve, 

## Initialize

```javascript
if (navigator.xr !== 'undefined') {
  console.log("Found a compatible WebXR device.");
  /*
    specify inline, immersive-vr, or immersive-ar
  */
  sessionMode = 'immersive-vr'
  if (navigator.xr.isSessionSupported(sessionMode)) {
  console.log("Available VR session");
};
};
```

## Session

```javascript
const xrSession = navigator.xr.requestSession(sessionMode);
xrSession.requestAnimationFrame();
```

## Frame Loop

## Space

## View

## Input

WebVR Relied on the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) to support controllers, but WebXR uses a special implementation of the Gamepad object.

# Caveats

> This is an experimental technology.

# References

[MDN WebXR API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
[WebXR Life Cycle](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Lifecycle)
