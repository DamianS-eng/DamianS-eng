# All About ImageMagick

Tags: [[image]][[command line]]

The command-line tool for photo manipulation

> **_NOTE_**: A lot of these command names are deprecated as of version 7. Try using `magick`

## Install

```bash
brew install imagemagick
```

## Basic Conversion

- `convert` \<in\> to \<out\>

```bash
convert input.<in> output.<out>
```

## Control Output

- `density`
  - adjust the resolution, Sets the DPI (dots per inch)
- `opacity`
- `quality`
  -  Adjusts the compression quality, balance file size and image quality.
  ```bash
  convert -density <number> input.<in> -quality 90 output.<out>
  ```

### Resize

```bash
convert input.<in> -resize <width>x<height> output.<out>
```

## Batch Conversion

Use `mogrify`

```bash
mogrify -format <jpg> *.<in>
```

### Options

- flatten
- format
- resize

```bash
mogrify -flatten -format <jpg> *.<in>
-flatten: Merges all the layers into one, so you get just one .jpg for each .psd.
```

## Crop
```bash
magick input -crop 640x480+612+452 output
```


# Good Examples

## Annotate all images with the same text at same position

```bash
for f in cropped_output*.png; do
  magick "$f" \
    -font RIT-Rachana-Bold \
    -gravity center \
    -pointsize 60 \
    -fill black -annotate -30+305 "HAPPY BIRTHDAY" \
    -fill lightblue -annotate -30+300 "HAPPY BIRTHDAY" \
    "text_$f"
done
```

## Convert all images in location into an animation (gif or webp)
```bash
magick -delay 8 \
    *.png \
    -loop 0 \
    output.(gif/webp)
```

# References

- [Codepen Markdown](https://codepen.io.peterbenoit/pen/MWNzoWV)
- [Develop](https://imagemagick.org/script/develop.php)
-  [My Codepen Form](https://codepen.io/DamianS-eng/pen/KKOOKPr)
-  [ImageMagick Documentation](https://usage.imagemagick.org/)
