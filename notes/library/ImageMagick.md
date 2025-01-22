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
  convert -density 150 input.<in> -quality 90 output.<out>
  ```

### Resize

## Batch Conversion

# References

[Codepen Markdown](https://codepen.io.peterbenoit/pen/MWNzoWV)
