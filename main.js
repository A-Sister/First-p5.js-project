function preload() {

}

function setup() {
    canvas = createCanvas(650, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 150, 100, 350, 280);
    fill(100, 128, 200);
    stroke(100, 128, 200);
    circle(570, 70, 90);
    circle(80, 70, 90);
    circle(80, 410, 90);
    circle(570, 410, 90);

    fill(200, 128, 128);
    stroke(200, 128, 128);
    rect(125, 60, 400, 20);
    rect(125, 400, 400, 20);
    rect(70, 115, 20, 250);
    rect(560, 115, 20, 250);
}