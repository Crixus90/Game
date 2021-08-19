const game = new Game();

let startGame = false;

function draw() {
  if (!startGame) {
    image(menuImage, 0, 0, CANVASWIDTH, CANVASHEIGHT);
    // noLoop();
    return;
  }
  game.draw();
}

function setup() {
  game.setup();
}

function keyPressed() {
  if (!startGame) {
    startGame = true;
    game.set();
  }
  game.keyPressed();
}

function preload() {
  //images
  menuImage = loadImage("./assets/ps.png");
  backgroundImage = loadImage("./assets/buildings.png");
  sidewalkImage = loadImage("./assets/sidewalk.png");
  powerLines = loadImage("./assets/Powerline.png");
  poop = loadImage("./assets/Poop.png");
  chippy = loadImage("./assets/chip.png");
  poopImg = loadImage("./assets/pooicon.png");

  for (let i = 0; i < 5; i++) {
    pigeon[i] = loadImage("./assets/tile" + i + ".png");
  }
  for (let i = 0; i < 7; i++) {
    man[i] = loadImage("./assets/man" + i + ".png");
  }
}
