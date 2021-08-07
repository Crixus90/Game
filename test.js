var images = [];

function preload() {
  for (var i = 0; i < 5; i++) {
    images[i] = loadImage("/assets/tile" + i + ".png");
  }
}

var currentImageIndex = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(15);
}

function draw() {
  background(51);
  image(images[currentImageIndex], 0, 0, 100, 100);
  currentImageIndex++;
  if (currentImageIndex > 4) {
    currentImageIndex = 0;
  }
}
