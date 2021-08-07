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
    background("#CEECF4");
    this.player.draw();
  }

  keyPressed() {
    if (keyCode === UPARROW) {
      this.player.jump();
    }
  }
}
