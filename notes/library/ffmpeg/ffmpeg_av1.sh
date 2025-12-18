#!/usr/bin/bash

if [ $# -lt 2 ]; then
  echo "Usage: $0 input_video crf_value [speed] [output_video]"
  exit 1
fi

INPUT_VIDEO="$1"
CRF="$2"

# Detect logical cores, cap at 16
THREADS=$(nproc --all)
if [ "$THREADS" -gt 16 ]; then
  THREADS=16
fi

CPU_USED=0
if [ $# -ge 3 ] && [ "$3" = "fast" ]; then
  CPU_USED=4
  shift 1  # shift arguments so $3 can be output filename if provided
fi

if [ $# -ge 3 ]; then
  OUTPUT_VIDEO="$3"
else
  OUTPUT_VIDEO="${INPUT_VIDEO%.*}_av1.mp4"
fi

ffmpeg -i "$INPUT_VIDEO" \
  -c:v libaom-av1 -crf "$CRF" -b:v 0 \
  -cpu-used "$CPU_USED" -threads "$THREADS" -row-mt 1 \
  -c:a libopus \
  "$OUTPUT_VIDEO"
