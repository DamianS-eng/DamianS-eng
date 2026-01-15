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
ffmpeg -ss {start_time} -t {duration} -i input -c copy output
```

# CPU-Work

```bash
-c:v libaom-av1
-c:v libvpx-vp9
-c:a libopus
```

```bash
ffmpeg -i {{input}} -map 0 -c:v libvpx-vp9 -c:a copy -c:s copy -b:v 1M -quality best -speed 1 -crf 26 output\ -\ vp9.mkv
```
## Extract frames to files
```bash
ffmpeg -i {input} -r {frame_rate} output-image-%3d.png
```

```bash
ffmpeg -i {input} -vf fps={frame_rate} newfolder/out%d.png
```

## 
## Filter Options

### Output video to gif

```bash
ffmpeg -i input -filter_complex "[0:v] fps=12,scale=480:-1,split [a][b];[a] palettegen=stats_mode=single [p];[b][p] paletteuse=new=1" output
```

```bash
ffmpeg -i input -vf "fps=10,scale=-1:720:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0  output
```

## Merge image frames to a video

```bash
ffmpeg -framerate {frame_rate} -i newfolder/out%d.png -c:v libx264 -r {{ output }}
```

## Merge two audio tracks together
```bash
ffmpeg -i input -i input2 -filter_complex amerge=inputs=2 -ac 2 output
```
# Hardware Acceleration

## NVIDIA

```bash
ffmpeg -hwaccel cuda -hwaccel_output_format cuda -i {{input}} -filter:v "scale_cuda=-1:{height},fps={frame_rate}" -c:a copy -c:v h264_nvenc -b:v 5M {{output}}
```

> Note: NVIDIA's hardware acceleration, while powerful, is only capable of encoding and decoding specific h264/5 codecs. It is only recommended to use this format outside of network files.
>
> Consider CPU or NPU encoding for making compressed files for network streaming.

# Concatenate
```bash
cat mylist.txt
```

> file '/path/to/file1'
>
> file '/path/to/file2'
>
> file '/path/to/file3'

```bash

ffmpeg -safe 0 -f concat -i mylist.txt -c copy output_complete.mkv
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
