## {.center}

<h2>Drawing like a five-year-old</h2>
<p>an introduction to code art</p>

<p style="margin-top:1em;">Dr Ben Swift</p>
<p>ANU Research School of Computer Science</p>

## Who drew pictures as a 5yo? {data-background-image="images/chalk.jpg" .text-hl}

## Your "Hour of Code"

- <https://hourofcode.com/>
- teach the computer to draw a picture
- learn how to deal with its tantrums
- share your stuff with the world

## p5.js

- open up a web browser (e.g. Firefox) and head to
  <https://alpha.editor.p5js.org/>
- **(optional)** if you want to share your work later, create an account (it's
  super-easy, and free)

<!-- <iframe src="https://alpha.editor.p5js.org/"></iframe> -->

## Edit the code

``` javascript
function setup() {
  createCanvas(800, 800);
}

function draw() {
  // add this next line on your computer
  background(220);
  rect(0, 0, 100, 100);
}
```

- don't forget to hit the play button!

## {data-background-image="images/collaboration.jpg" .text-hl}

## Can you draw the square **differently**?

- bottom right
- tall and skinny
- short and fat
- filling the **whole** top right quarter

## New shapes

- what happens if you replace `rect` with `ellipse`?
- you can have multiple lines of code in the `draw` function---can you draw a
  square and a circle on top of one another?

## Colours {data-background-image="images/paint.jpg" .text-hl}

## Colours

- put one of these **before** your `rect` line:
``` {.javascript .fragment}
fill(255, 0, 0);
// or
stroke(15, 180, 0);
```
- try changing the numbers around...

## Colours

``` {.javascript .fragment}
fill(255, 0, 0); // each value from 0-255
```
<div style="font-size: 33vh; font-weight:600; line-height:1em; text-align:center;">
<span style="color:#A00;">R</span>
<span style="color:#0A0;">G</span>
<span style="color:#00A;">B</span>
</div>

## {.center .impact}

how do you know what instructions the computer **understands**?

# Use the [reference](https://p5js.org/reference/) {.center .text-hl data-background-image="images/yoda.jpg"}

## Dealing with errors {data-background-image="images/volcano.jpg" .text-hl}

## Dealing with errors

- like a 5-year-old, you need to be **specific**
- don't forget any brackets, commas, etc.
- learn to *understand* the tantrums:

``` {.fragment style="font-size:2vw;"}
ReferenceError: sdfsd is not defined (sketch: line 8)
SyntaxError: missing ) after argument list (sketch: line 12)
```

## Smiley face {data-background-image="images/smiley.png" .text-hl}

---

``` {.javascript style="font-size:2.5vw;"}
function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(120);
  // set colour to yellow & draw face
  fill(255, 255, 0);
  ellipse(400, 400, 400, 400);
  
  // set colour to black & draw eyes/mouth
  fill(0);
  ellipse(300, 350, 70, 70);
  ellipse(500, 350, 70, 70);
  ellipse(400, 500, 120, 70);
}
```

## Interaction

- replace one of the numbers (e.g. a `100`) with `mouseX`
- replace one of the numbers with `frameCount`
- do some maths (e.g. `+`, `-`, `*`, `/`, `%`, ...)

## What have we done today?

- programming (like any sufficiently complex activity) uses lots of jargon &
  technical terms
- but in the end, it's just about telling your computer what to do **in language
  it understands**
- there's lots more!
- if you created an account earlier, then you'll have a **share** tab along the
  top of the screen

## Going further

- <https://p5js.org/reference/>
- <https://p5js.org/examples/>
- [ben.swift@anu.edu.au](mailto:ben.swift@anu.edu.au)
