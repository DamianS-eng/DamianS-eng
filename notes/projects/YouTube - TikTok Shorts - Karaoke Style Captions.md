Creating those common live karaoke-style captions for YouTube shorts and TikTok-format videos.

Tags: [[videos]][[kdenlive]][[captions]][[transcript]]

> Of course, the best methods to this are the free and reproducible onces.

# Workflow

1. Put the video with audio in a transcript generator
 - __Options__:
 - TokScript
 - OutBlog
2. Download the transcript with timestamps.
3. Import the transcript into a caption editor.
 - __Options__:
 - CapCut
 - Descript
 - Premiere
 - VEED
4. Apply the karaoke-style animation preset
5. Export

# Transcript Generator

Some programs generate transcripts using voice-to-text technology. `Auto captions`, `transcribe`

# Karaoke-Style Preset

## Safe text area

## Big and bold

## Contrast

# Kdenlive

## Install on Debian

```bash
sudo apt install kdenlive
```

## Install on Fedora

```bash
sudo dnf install kdenlive
```

## Generate the transcript

1. Open Project
2. Editing screen
3. Speech Editor
  - A voice model needs to be configured. Install the necessary plugin, then download and have the program locate a model.
4. Select Vosk and the language model
5. Edit Subtitle Tool -> Speech Recognition
6. Run transcription

## Convert to animated text clips

1. Right-click subtitle track => "CreateTitle Clips from Subtitles"
2. Select all clips => apply **fade-in** or **typewriter** animation
3. Adjust timing
4. Add glow or outline
