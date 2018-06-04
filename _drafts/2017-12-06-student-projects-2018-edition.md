---
layout: post
title: Student projects 2018 edition
date: 2017-12-06 09:08
tags: student-projects
---
 
Here are a few hons/masters/PhD research project ideas. If you're interested,
then see the [instructions on how to get in touch about doing research with
me]({{site.baseurl}}{% link _students/index.md %}#come-study-with-me).

## Seeing the bits: real-time visualisation & analysis of environmental data flows

Look around you---there's digital data *everywhere* (this isn't really a
particularly insightful observation these days). There's network data flowing
over the wires and through the air, there's data & computation embedded in many
of the objects that you see, touch & ignore every day. And although these bits
are largely invisible to you, they 


Co-supervisor: Shane Magrath

### Research questions

### Required skills


## Computing the assemblage

Co-supervisor: Tim Graham

### Research questions

### Required skills

## In-browser livecoding with Extempore and wasm

Well, it looks like wasm is going to be a thing---a real thing. And since
Extempore uses an LLVM backend for codegen it's certainly possible 

### Research questions

### Required skills

## Live steering of scientific simulation codes

Co-supervisor: Henry Gardner

### Research questions

### Required skills

## Learning to livecode

Co-supervisor: Henry Gardner

The jury's still well and truly out on the best way to teach programming.
However, livecoding---and especially musical livecoding---has a few things going
for it as a vehicle for teaching

### Research questions

### Required skills

## The Canvas: large-scale user-programmable data visualisation

Co-supervisor: Mitchell Whitelaw/Geoff Hinchcliffe

## Code annotations for livecoding

Co-supervisor: Henry Gardner/Mitchell Whitelaw/Geoff Hinchcliffe

## Teaching programming through musical (or at least artistic) coding

Why do we have to use java/python to teach programming? The reason *I* started
doing this is because I wanted to make music, and the first programming that I
did was musical livecoding in Scheme[^impromptu].

[^impromptu]: using the [Impromptu](http://impromptu.moso.com.au) livecoding environment

## The design & implementation of an interactive 3D graphics pipeline in Extempore



- add animation to the graphics pipeline
- canvas (hardware-accelerated charts/vis)
- deferred rendering
- general algorithmic music/DSP stuff
- clean up the signal analysis stuff
- ARM port
- WASM port

- doc update

# Extempore on ARM: live programming the internet of things

Extempore[^1], an environment for \'live programming\'[^2], has
(experimental) support for ARM devices such as the Pandaboard, Hackberry
and the ODROID-X2. These devices are capable of running mainstream Linux
distros such as Ubuntu or Arch Linux, and support many different
hardware sensors and actuators (e.g. LED lighting strips, servo motors
for robots, etc.).

This project has three components:

-   building an ARM-based devices with on-board sensors & actuators
-   using Extempore, programming these ARM devices on-the-fly, including
    reading from sensors, processing data, and acting in the world.
-   contributing to the maturity of the Extempore compiler and runtime
    on ARM

# Towards a toolkit for on-the-fly \'live visualisation\' in scientific visualisation

Extempore[^3] supports the real-time programming[^4] of both 2D (with
Cairo[^5]/OpenVG[^6]) and 3D graphics (with OpenGL[^7]). The dynamic
nature of extempore means that both the low-level (including vertex
buffers and shaders) and high-level (including working with images,
models, and lighting) components of the graphics stack can be
constructed and manipulated by the programmer \'live\'.

This opens up the possibility of \'live visualisation\', where data
(e.g. from a scientific computing application) is visualised in
real-time in an exploratory fashion. The live programmer is free to
modify the mapping from data to visual feedback on-the-fly to find the
best visual representation for a given problem. This project involves
investigating this type of live visualisation in Extempore, both from a
computational and also a human factors perspective.

The goal of the project is to gain an understanding of what tools (both
in Extempore and in a development environment) the live programmer needs
to achieve this task, and the development of an Extempore library for
live visualisation, and possibly a user study of this technique in a
scientific visualisation context.

# Coding for an audience: visual feedback and code markup for live coding performance

In \'live coding\'[^8] a programmer/aritst writes a program to generate
audiovisual material (often music) in real-time, in front of an
audience. During a performance, the source code is projected onto a
screen as it is edited for the audience\'s benefit.

This display of code for an audience is a key part of the practice of
livecoding, but many audience members lack the required background
knowledge (either musical, programming or both) to fully comprehend the
relationship between the code on the screen and the musical material
they are hearing. Some techniques have been proposed [^9] for visual
\'annotations\' to the code which may assist the audience in their
comprehension.

This project involves investigating various methods of presenting source
code in the context of a live coding performance in Extempore[^10]. This
involves the design, implementation (Extempore supports both 2D graphics
with Cairo[^11]/OpenVG[^12] and 3D graphics with OpenGL[^13]) and
evaluating their effectiveness in live coding with a real audience.

# Live data analysis/computational steering

Extempore[^14] is a programming environment for live programming.
xtlang[^15], a LLVM-JIT-compiled programming language hosted by the
Extempore compiler, supports toll-free linking and calling into shared C
libraries (.so, .dylib or .dll depending on platform). This allows
Extempore to use many open-source data analysis and numeric computation
libraries, e.g. FANN for neural networks [^16] or libsvm [^17] for
support vector machines.

However, Extempore\'s support for real-time JIT compilation (and
re-compilation) and interaction by the programmer in a \'live
programming\' paradigm[^18] allows for the possibility of controlling
these libraries at a high level, \'steering\' them based on feedback on
the computation in progress, or orchestrating multiple concurrent
analyses of the same data, making decisions based on which ones were
proving more fruitful.

This project would involve:

-   selecting a data analysis technique (or techniques) and a data set
    to analyse
-   implementing library/tooling support in Extempore to provide the
    programmer with appropriate feedback and control for the running
    analyses

# Algorithmic music up and down the stack

Extempore[^19] is (among other things) a programming environment for
algorithmic music composition[^20], and has built-in support a number of
common tasks in this problem domain. These include several built in
synthesisers and musical samplers (instruments) and audio/DSP effects
(e.g. reverb, delay). Extempore, through it\'s strong temporal
semantics[^21] also allows the scheduling of notes and other musical
events in time, allowing for the possibility of generative music.

There are many different software environments for algorithmic
musicmaking, designed for both offline and real-time use. What sets
Extempore apart is the ability (through Extempore\'s support for both
Scheme and xtlang[^22]) to modify the generative processes at both an
event (note) and at a signal (DSP) level, and all within the same
programming environment. This project involves looking at algorithmic
control and generation of musical material at both of these levels,
including the possibilites of their interacting (e.g. note events
manipulating the audio at a signal level, and vice versa). The outcomes
of this project will be techniques for algorithmic composition which
leverage this synergy, as well as a body of musical work which
demonstrates these techniques in action.

[^1]: <http://extempore.moso.com.au>

[^2]: <http://benswift.me/2012-10-15-time-in-extempore.html>

[^3]: <http://extempore.moso.com.au>

[^4]: <http://benswift.me/2012-09-26-interacting-with-the-extempore-compiler.html>

[^5]: <http://benswift.me/2012-10-15-time-in-extempore.html>

[^6]: <http://benswift.me/2012-08-09-xtlang-type-reference.html>

[^7]: <http://benswift.me/2012-10-15-playing-an-instrument-part-i.html>

[^8]: <http://extempore.moso.com.au>

[^9]: <http://benswift.me/2012-10-15-time-in-extempore.html>

[^10]: <http://benswift.me/2012-08-09-xtlang-type-reference.html>

[^11]: <http://benswift.me/2012-10-15-playing-an-instrument-part-i.html>

[^12]: <http://benswift.me/2012-09-26-interacting-with-the-extempore-compiler.html>

[^13]: <http://www.khronos.org/opengl/>

[^14]: <http://extempore.moso.com.au>

[^15]: <http://benswift.me/2012-10-15-time-in-extempore.html>

[^16]: <http://benswift.me/2012-08-09-xtlang-type-reference.html>

[^17]: <http://benswift.me/2012-10-15-playing-an-instrument-part-i.html>

[^18]: <http://benswift.me/2012-09-26-interacting-with-the-extempore-compiler.html>

[^19]: <http://extempore.moso.com.au>

[^20]: <http://benswift.me/2012-10-15-playing-an-instrument-part-i.html>

[^21]: <http://benswift.me/2012-10-15-time-in-extempore.html>

[^22]: <http://benswift.me/2012-08-09-xtlang-type-reference.html>
