# FFMPEG

The command-line tool to analyze, decode and re-encode video or animated photos.

Tags: [[ command-line ]] [[ ffmpeg ]] [[ video ]]

# The standard format

## Analyze

```bash
ffmpeg -i input.mp4
```

## Convert video codec
```
ffmpeg -i input.mp4 -c:v {{ DESIRED_CODEC }} -c:a {{ DESIRED_CODEC }} output.mkv
```
> Of course, use any compatible extension in place of mp4 or mkv.

## crf vs. b:v

# CPU-Work

```bash
-c:v libaom-av1
-c:a libopus
```

# Hardware Acceleration

## NVIDIA

```bash

```

> Note: NVIDIA's hardware acceleration, while powerful, is only capable of encoding and decoding specific h264/5 codecs. It is only recommended to use this format outside of network files.
>
> Consider CPU or NPU encoding for making compressed files for network streaming.

# Recommended Advice

## Trade-off Between Speed and Efficiency
