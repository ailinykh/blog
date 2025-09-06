---
slug: ffmpeg-cheatsheet
title: FFMPEG cheatsheet
authors: [anton]
tags: [ffmpeg, cheatsheet]
---

Here you can find some usefull tips of using ffmpeg library

<!--truncate-->

::::tip a sample video file to play with

```
curl -o input.mp4 https://www.w3schools.com/html/mov_bbb.mp4
```

::::

### Show detailed information about video file

the `ffprobe` works with _images_ as well

```bash
ffprobe -v error -of json -show_streams -show_format input.mp4
```

### Resize to desired width/height

- explicit size: `scale=640:480`
- resize only by width: `scale=640:-1`
- resize only by height: `scale=-1:480`
- to make a thumbnail just specify `output.jpg` as output file

```bash
ffmpeg -v error -y -i input.mp4 -ss 00:00:01.000 -vframes 1 \
    -filter:v scale=320:-1 output.mp4
```

### Split video by size

- split video by 50MB
- specify offset as `-ss 00:10:00`

```bash
ffmpeg -v error -y -i input.mp4 -fs 50000000 output.mp4
```

### Use -map_metadata to keep `id3` tags

```bash
ffmpeg -i input.mp4 -map 1 -c copy output.mp4
```

- copy global metadata

```bash
ffmpeg -i input.mp4 -map_metadata 0 -c copy output.mp4
```

- copy video stream metadata only

```bash
ffmpeg -i input.mp4 -map_metadata:s:v 0:s:v -c copy output.mp4
```

- copy audio stream metadata only

```bash
ffmpeg -i input.mp4 -map_metadata:s:a 0:s:a -c copy output.mp4
```

### Convert to 1080p

```bash
ffmpeg -v error -stats -i input.mp4 -map_metadata 0:g -s hd1080 \
    -c:v libx264 -crf 23 -c:a aac -strict -2 output.mp4
```

### Convert video to .gif

```bash
ffmpeg -v error -stats -i input.mp4 -y \
    -vf fps=10,scale=640:-1:flags=lanczos,palettegen palette.png

ffmpeg -v error -stats -i input.mp4 -i palette.png -filter_complex \
    "fps=10,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif

rm palette.png
```

### Rotate video

- 0 = 90CounterCLockwise and Vertical Flip (default)
- 1 = 90Clockwise
- 2 = 90CounterClockwise
- 3 = 90Clockwise and Vertical Flip

```bash
ffmpeg -i input.mp4 -vf "transpose=1" output.mp4
```
