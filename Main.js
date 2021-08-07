const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  game.setup();
}

function keyPressed() {
  game.keyPressed();
}

function preload() {
  pigeon = loadImage("assets/tile0.png");
  backgroundImage = loadImage("assets/buildings.png");

  for (var i = 0; i < 5; i++) {
    pigeon[i] = loadImage("/assets/tile" + i + ".png");
  }
}
