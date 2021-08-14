class Chippy {
  constructor() {
    this.x = 1000;
    this.y = random(50, 350);
    this.height = 40;
    this.width = 7;
    this.speed = 2;
  }

  draw() {
    image(chippy, this.x, this.y, this.height, this.width);

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
