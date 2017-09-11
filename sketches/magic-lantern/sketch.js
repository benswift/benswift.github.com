function randomCircles() {
    fill(255, 255, 120);
    for(var i = 0; i < 50; i++) {
        ellipse(randomGaussian(0, 50), randomGaussian(0, 50), 10, 10);
    }
}

function spiralCircles() {
    let n = 50;
    for(var i = 0; i < n; i++) {
        fill(i*360/n, 100, 100);
        let r = 0.2+0.1*sin(i*frameCount/1000);
        ellipse(i/n, 0, r, r);
        rotate(5*TWO_PI/n);
    }
}

function bars(d) {
    strokeWeight(2);
    stroke(120, 152, 255);
    for(var i = 0; i < 20; i++) {
        let x = random(-d/2, d/2);
        line(x, 0, x, d);
    }
}

function drawDisc(drawFn, i, n, s, angle, bm) {
    push();
    translate(i*width/(n+1), height/2);
    scale(s);
    // draw the "backlight"
    noStroke();
    fill(0);
    // ellipse(0, 0, diameter, diameter);
    rotate(angle);
    // now draw the disk over the top
    blendMode(bm);
    push();
    drawFn();
    pop();
    pop();
}

var diameter;

function setup() {
    colorMode(HSB, 360, 100, 100);
    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    diameter = min(windowWidth, windowHeight)/4;
}

function draw() {
    background(10);
    drawDisc(spiralCircles, 1, 3, 100, frameCount/500, DIFFERENCE);
    drawDisc(spiralCircles, 2, 3, 200, frameCount/500, OVERLAY);
    drawDisc(spiralCircles, 2, 3, 200, -frameCount/500, OVERLAY);
    drawDisc(spiralCircles, 3, 3, 100, -frameCount/500, SCREEN);
}
