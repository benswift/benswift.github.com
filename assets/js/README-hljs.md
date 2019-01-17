# About the highlight.js + xtlang setup

This is a bit fiddly to set up at present, because
[reasons](https://github.com/highlightjs/highlightjs-xtlang#usage).

This branch contains all the infrastructure required to make a custom build of
highlight.js with whatever languages you need (including xtlang). These
instructions assumes you've done this sort of thing before.

You'll need to:

1. initialise the submodules (both hightlight.js and highlight.js-xtlang)

2. run the hljs build tool `tools/build.js` (there's an example invocation in
   `build-hljs-and-copy-pack-into-place.sh` in the top-level of this repo)

3. copy the output `highlightjs.pack.js` file into the `assets/js` folder
   (again, this is done in `build-hljs-and-copy-pack-into-place.sh`)

4. copy the `*.css` file corresponding to your theme of choice into `assets/css`

5. put it all together using the stuff in `_includes/hljs.html`

6. profit?
