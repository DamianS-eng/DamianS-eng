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

### crf vs. b:v

## Timestamps

```bash
ffmpeg -ss 30 -t 3 -i input -c copy output
```

# CPU-Work

```bash
-c:v libaom-av1
-c:a libopus
```

## Extract frames to files
```bash
ffmpeg -i *.mp4 -r 24 output-image-%3d.png
```

## Filter Options

### Output video to gif

```bash
ffmpeg -i input -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" output
```

```bash
ffmpeg -i input -vf "fps=10,scale=-1:720:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0  output
```

# Hardware Acceleration

## NVIDIA

```bash

```

> Note: NVIDIA's hardware acceleration, while powerful, is only capable of encoding and decoding specific h264/5 codecs. It is only recommended to use this format outside of network files.
>
> Consider CPU or NPU encoding for making compressed files for network streaming.

# Concatenate
```bash
ffmpeg -safe 0 -f concat -i combine.txt -c copy output_complete.mkv
```

## Merge video only with separate audio track
```bash
ffmpeg -i video.ts -i audio.aac -map 0:v:0 -map 1:a:0 -c:v libx264 -c:a copy output.mkv
```

# Combine Subtitle Track
```bash
ffmpeg -i video.mp4 -i subtitle.srt c:v copy c:a copy -scodec mov_text output.mp4
```

# Recommended Advice

## Trade-off Between Speed and Efficiency
