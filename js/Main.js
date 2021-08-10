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
  pigeon = loadImage("../assets/tile0.png");
  backgroundImage = loadImage("../assets/buildings.png");
  sidewalkImage = loadImage("../assets/sidewalk.png");
  powerLines = loadImage("../assets/Powerline.png");

  for (var i = 0; i < 5; i++) {
    pigeon[i] = loadImage("../assets/tile" + i + ".png");
  }
  for (var i = 0; i < 7; i++) {
    man[i] = loadImage("../assets/man" + i + ".png");
  }
}
