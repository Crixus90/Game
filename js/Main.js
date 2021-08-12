const game = new Game();

let startGame = false;

function draw() {
  if (startGame) {
    game.draw();
  } else {
    canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    image(menuImage, 0, 0, CANVASWIDTH, CANVASHEIGHT);
    if (keyCode === UPARROW) {
      startGame = true;
    }
  }
}

function setup() {
  if (startGame) {
    game.setup();
  }
}

function keyPressed() {
  if (startGame) {
    game.keyPressed();
  }
}

function preload() {
  menuImage = loadImage("./assets/ps.png");
  backgroundImage = loadImage("./assets/buildings.png");
  sidewalkImage = loadImage("./assets/sidewalk.png");
  powerLines = loadImage("./assets/Powerline.png");
  poop = loadImage("./assets/Poop.png");

  for (var i = 0; i < 5; i++) {
    pigeon[i] = loadImage("./assets/tile" + i + ".png");
  }
  for (var i = 0; i < 7; i++) {
    man[i] = loadImage("./assets/man" + i + ".png");
  }
}
