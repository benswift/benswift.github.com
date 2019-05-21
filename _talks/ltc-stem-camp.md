---
event: Lake Tuggeranong College STEM Camp
title: Finding & following the patterns in music
date: "2019-05-22"
permalink: /talks/ltc-stem-camp/
summary: >-
  Computers are really good at repeating the same sequence of actions
  (following a pattern): they never get bored, and they never make mistakes. The
  tricky part is finding the right sequence of instructions (the right pattern)
  so that the work that the computer does is useful--especially in music.

  An interactive presentation/workshop given at the [Lake Tuggeranong
  College](http://www.ltc.act.edu.au) STEM camp.
---

{% include slides/title.html %}

<!-- LTC photo -->

{% include slides/background-image.html image="images/talks/ltc-stem-camp/granite-tors.jpg" %}

{% include slides/impact.html %}

enough about me...

tell me about **you**

<!-- musicians -->

<!-- mathematicians -->

<!-- coders -->

<!-- no judgement! -->

<!-- **discuss**: is there a connection? -->

<!-- **discuss**: what are computer programs good at? -->

<!-- **discuss**: what would a song performed by a computer program sound like? -->

## outline

what is (pop) music?

_low_-tech musical performance

livecoding: _high_-tech musical performance

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/bieber.jpg"
		   heading="what is music?"
		   id="bieber" %}

{% include slides/impact.html %}

**music** _(n.)_

{:.fragment}

a series of pitched "events" over time

<!-- TODO maybe change this next one to a smug liberal? a bit more woke. -->

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/alex-harvey-44062-unsplash.jpg"
		   heading="pedantry alert!" %}

## what is (pop) music?

pop songs are characterised by:

- catchy hooks
- repetitive harmonic patterns (e.g. chord progressions)
- processed/synthetic sounds (lots of computers involved in the production)

{% include slides/impact.html %}

lots of **patterns**

but how do we express them?

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/rawpixel-com-586684-unsplash.jpg" %}

## "dimensions" of a musical note

- time
- pitch
- loudness

## time

TODO pic

- why is it important?
- what aspects of the music does it influence?
- how do we measure it?

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/johannes-plenio-473709-unsplash.jpg" 
		   heading="pitch" %}

- why is it important?
- what aspects of the music does it influence?
- how do we measure it?

{% include slides/background-image.html image="images/talks/ltc-stem-camp/devin-edwards-776929-unsplash.jpg" heading="loudness" %}

- why is it important?
- what aspects of the music does it influence?
- how do we measure it?

{% include slides/background-image.html image="images/talks/pop-production-as-problem-solving/the-digital-marketing-collaboration-45756-unsplash.jpg" heading="pitch" id="modelling-the-domain" %}

## maths recap 1: functions

function _f(x, y)_ takes two parameters/arguments and returns a result

e.g. _f(x, y)_ = _8x_ + _2y_

basically: parameters are _input_, the function does something with the inputs
to produce an _output_

## maths recap 2: modular arithmetic

arithmetic which "wraps around"

0, 1, 2, 0, 1, 2, 0, 1, 2, ... instead of 0, 1, 2, 3, 4, 5, 6, ...

the modulus can be any integer, e.g.
- 7 mod 4 is 3
- 18 mod 7 is 1

## example: clock

{% asset images/talks/ltc-stem-camp/Clock_group.svg alt="Clock"
style="height:50vh;"%}

graphic by _Spindled_ [CC BY-SA
3.0](https://en.wikipedia.org/wiki/Modular_arithmetic#/media/File:Clock_group.svg)

# low-tech musical performance

TODO patterns

{% include slides/impact.html %}

this bit is interactive

Queen



# livecoding

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/aditya-chinchure-494048-unsplash.jpg"
		   heading="<a href=\"https://extemporelang.github.io/\">extempore</a>: a
		   livecoding language" %}

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/rob-potter-350100-unsplash.jpg"
		   heading="livecoding"  %}

## what _I'm_ gonna do

- learn a new song (by ear!)
- figure out how to turn it into code
- find a bunch of sounds which sound (approximately) like the recording
- lay down a vocal track (maybe)
- make the whole process make sense to you guys

## what _you're_ gonna do

- help me choose the song
- be kind when I make mistakes
- clap politely at the end (even if I flame out)

{% include slides/background-image.html image="images/talks/pop-production-as-problem-solving/rawpixel-487102-unsplash.jpg" heading="I'm old..." %}

## reminder: parameterisation

- **time** (in beats), e.g. 1, 2, 3, 4, 5, 6, 7, 8
- **pitch** (in MIDI note numbers), e.g. middle C as 60, C# as 61, etc.
- **loudness** (0 is silent, 127 is super loud)

## [extempore](https://extemporelang.github.io/): a livecoding _language_

[extempore](https://extemporelang.github.io/) is a programming language designed
for musical livecoding (written [Andrew Sorensen](https://twitter.com/digego)
and [me]({{site.baseurl}}{% link index.md %}))

don't worry about the syntax, I'll explain enough for you to follow along

{% include slides/background-image.html
		   image="images/talks/pop-production-as-problem-solving/rob-potter-350100-unsplash.jpg"
		   heading="let's go!"
		   id="crowdsourced-livecoding" %}

# wrapping up

## what did we learn?

pop music isn't black magic, it's a domain with lots of structure/patterns

computers/code are _really useful_ for modelling/exploring this stuff

{:.fragment}

this is _not_ AI, either

## c/c/c studio

in 2020 I'm starting an art+music+code extension program at the ANU

we'll do stuff like this (and lots more)

if you're interested, let me know 😊

{% include slides/impact.html %}

{:style="font-size:2em;"}

🤔

{:.fragment}
<ben.swift@anu.edu.au>

{:.fragment}
<https://benswift.me>