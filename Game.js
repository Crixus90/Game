class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
  }

  setup() {
    createCanvas(CANVASWIDTH, CANVASHEIGHT);
  }

  draw() {
    clear();
    this.background.draw();

    this.player.draw();
    this.player.setup();
  }

  keyPressed() {
    if (keyCode === UPARROW) {
      this.player.jump();
    }
  }
}
