class Game {
  constructor() {
    this.player = new Player();
    this.man = new Man();
    this.background = new Background();
    this.buildings = [];
  }

  setup() {
    canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    canvas.position(250, 0);
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.player.setup();

    if (frameCount % 500 === 0) {
      this.buildings.push(new Building());
    }
    this.buildings.forEach((building, index) => {
      building.draw();
    });
    this.man.draw();
  }

  keyPressed() {
    if (keyCode === UPARROW) {
      this.player.jump();
    }
  }
}
