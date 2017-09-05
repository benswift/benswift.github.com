# Copyright (C) 2017  Ben Swift

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

revealjs-url := js/reveal.js-3.5.0
slide-theme := anucs

# find all the .md source files
md := $(filter-out README.md, $(wildcard *.md))

all: slides css

slides: $(md:.md=.html)

%.html: %.md revealjs-header.html
	pandoc -t revealjs \
				--standalone \
	      --no-highlight \
        --slide-level=2 \
        --include-in-header=revealjs-header.html \
        --variable=revealjs-url:$(revealjs-url) \
        --variable=theme:none \
        --variable=controls:false \
        --variable=history:true \
        --variable=transition:fade \
        --variable=viewDistance:10 \
        --variable=center:false \
        --variable=width:\"90%\" \
        --variable=height:\"100%\" \
        --variable=margin:0 \
        --variable=minScale:1 \
        --variable=maxScale:1 \
        -i "$(<F)" -o "$(@F)"

css/$(slide-theme).css: css/$(slide-theme).scss
	sass --no-cache $< $@

css: css/$(slide-theme).css

clean:
	rm $(md:.md=.html) css/$(slide-theme).css

## if you have watchexec installed: https://github.com/mattgreen/watchexec
watch:
	watchexec --exts md,js,scss,html make
