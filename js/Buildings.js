class Building {
  constructor() {
    this.width = 200;
    this.height = random(250, 350);
    this.x = CANVASWIDTH + this.width;
    this.y = CANVASHEIGHT - this.height;
    this.speed = 3;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
    this.x -= this.speed;
  }
}
