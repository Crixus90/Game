class Powerline {
  constructor(difficulty) {
    this.width = 94;
    this.height = random(250, 450);
    this.x = CANVASWIDTH + this.width;
    this.y = CANVASHEIGHT - this.height;
    this.speed = difficulty;
  }

  draw() {
    image(powerLines, this.x, this.y, this.width, this.height);
    this.x -= this.speed;
  }

  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
