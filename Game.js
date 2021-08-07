class Game {
  constructor() {
    this.player = new Player();
  }

  setup() {
    createCanvas(CANVASWIDTH, CANVASHEIGHT);
  }

  draw() {
    clear();
    background("#CEECF4");
    this.player.draw();
  }

  keyPressed() {
    if (keyCode === SPACE) {
      this.player.jump();
    }
  }
}
