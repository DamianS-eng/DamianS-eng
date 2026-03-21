An overview of how the default Android operating system lays out its directories.

# Overview

- Alarms
- Android
- Audiobooks
- DCIM
- Documents
- Download
- Movies
- Music
- Notifications
- Pictures
- Podcasts
- Recordings
- Ringtones

# In-Depth

## Alarms
A special directory for storing user-added system sounds, selectable in the Clock app to customize the alarm tone.

Android always will try to create this directory, even if an SD card is inserted inside.

## Android
A special system-managed directory where apps store their own files, like cache, downloads, assets and configuration files. Restricted for security.

### data
Holds app-specific files. Each app has its own subfolder.
- cache
- temp
- saved data
- offline content

### obb 
Stores large assets and expansion files

## Audiobooks
Public media folder, designated for audiobook files. Not to be treated as Music.

## DCIM
Universal digital camera image directory. Photo apps store and look for images taken by the camera here.
### Subfolders
- Camera
- Screenshots
- Panorama, Burst, Portrait
- .thumbnails

## Documents
Public media folder, designated for general-purpose user documents.

## Downloads
A "catch-all" landing zone of all saved files, like images, videos, music, documents, etc.

## Movies
Public media folder, designated for user-owned or app-downloaded, non-camera video files.

## Music
Public media folder, designated for user-owned music files. Not to be treated as Audiobooks.

## Notifications
General-purpose space for holding user-owned custom sounds for app or OS notifications.

## Pictures
Public media folder, designated for picture files. Not to be treated as Audiobooks.

Considered more general-purpose, non-camera images, including images saved from social apps, the Internet, or editing apps.

## Podcasts
Public media folder, designated for user-downloaded podcasts, separate from Music and Audiobooks.
## Recordings
Directory dedicated for output of microphone recording apps.

## Ringtones
Directory dedicated for holding alert sounds for phone calls.

