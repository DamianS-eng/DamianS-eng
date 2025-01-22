# All About ImageMagick

Tags: [[image]][[command line]]

The command-line tool for photo manipulation

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

# References

[Codepen Markdown](https://codepen.io.peterbenoit/pen/MWNzoWV)
[My Codepen Form](https://codepen.io/DamianS-eng/pen/KKOOKPr)
