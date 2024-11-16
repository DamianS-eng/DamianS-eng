# TMUX

A way to manage multiple sessions, windows and panes in a linux terminal.

It's like `screen` with many more features.

# Prefix Key

`Ctrl + B`

Use this prefix key (^ default) before tmux commands.

# Commands

## Status

```bash
tmux ls
```

## Movement

`C-b`
- `^v<>`: move to next pane
- `q`: display indexes of panes
  - `0, 1, 2...`: go to pane

## Divide Panes

`C-b`
- `"`: Split sideways
- `%`: Vertical halves
- `Alt-1/2/3...`: preset layouts

## Resize

`C-b`
- `C-</>`: resize panel
- `Alt-</>`: resize bigger

## Windows

`C-b`
- `c`: create new window
- `b`: go to prev window
- `n`: go to next window
- `,`: change name of window
<hr />
- `w`: list of windows and sessions
<hr />

## Sessions

- `d`: detach from session

## Copy Mode

`C-b`
- `[ / ]` 

# References

- [Commands from NetworkChuck from YouTube](https://www.youtube.com/watch?v=nTqu6w2wc68)
- [Blog on Customization](https://hamvocke.com/blog/a-guide-to-customizing-your-tmux-conf/)
- [Decorate your terminal](https://hamvocke.com/blog/lets-create-a-terminal-color-scheme/)
