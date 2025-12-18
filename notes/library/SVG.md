# All About Scalar Vector Graphics

Tags: [[svg]] [[web design]] [[html]]

## Path

The SVG `<path>` element is rather obscure at first, but makes sense when needing to create graphics with illustrator tools.

`<path>` is modeled after the "pen" tool in vector graphics software such as Adobe Illustrator. It chains drawing instructions together, like pen to paper.

Think of a path string as a receipe, with the numbers as parameters for each instruction, like arguments passed to a function.

### Attributes

> `d`

`d` stands for "data". It's a set of sequential drawing instructions.

> `M`

`M` moves the pen to a specific point, at two coordinates, X & Y. **It doesn't draw anything.**

> **Every path command *must* start with a Move command.**

```html
<path d="M 10,10" />
```

> `L`

`L` draws a straight line to a specific point, at two coordinates, X & Y.

> `Q`

`Q` stands for "quadratic" Bézier curves. This command draws a parabolic arc controlled by one point, which *pulls* the line back between the start and end.

```html
<path d="
...
Q 8,0   // control point
  15,15 // end point
"/>
```

> `C`

`C` stands for "cubic" Bézier curves. Similar to "quadratic", there are two control points to bend the line, allowing more precision in the curve.

```html
<path d="
...
C 8,0   // first control
  8,15  // second control
  15,15 // end point
"/>
```

# References

- [A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)
- [Interactive Guide to SVGS](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)
