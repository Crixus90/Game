class Game {
  constructor() {
    this.player = new Player();
    this.man = new Man();
    this.background = new Background();
    this.powerLines = [];

    //game settings
    this.score = 0;
    this.highScore = 0;
    this.difficulty = 1;
  }

  setup() {
    canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    canvas.position(250, 0);
  }

  draw() {
    clear();
    this.background.draw();

    if (frameCount % 200 === 0) {
      this.powerLines.push(new Powerline(this.difficulty));
    }
    //score
    if (frameCount % 60 === 0) {
      this.score++;
      scoreHolder.innerText = this.score + "m";
    }
    this.powerLines.forEach((powerLine, index) => {
      powerLine.draw();

      if (powerLine.rightSide <= 0) {
        this.powerLines.splice(index, 1);
      }

      if (this.collisionCheck(this.player, powerLine)) {
        this.score = 0;
        this.gameDifficulty = 1;
        scoreHolder.innerText = this.score;
      }
    });
    this.man.draw();
    this.player.draw();
    this.player.setup();

    if (frameCount % (120 * 5) === 0) {
      this.difficulty += 5;
      console.log(this.difficulty);
    }
  }

  keyPressed() {
    if (keyCode === UPARROW) {
      this.player.jump();
    }
  }

  collisionCheck(player, obstacle) {
    if (player.bottomSide < obstacle.topSide) {
      return false;
    }

    if (player.rightSide < obstacle.leftSide) {
      return false;
    }

    if (player.leftSide > obstacle.rightSide) {
      return false;
    }

    if (player.topSide > obstacle.bottomSide) {
      return false;
    }

    return true;
  }
}
