song1="";
song2="";

function preload() {
    song1 = loadSound("DancingWithOurHandsTied.mp3");
    song2 = loadSound("Delicate.mp3");
}

function setup() {
    canvas = createCanvas(700,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,700,550);
}

