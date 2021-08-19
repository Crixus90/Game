class Poo {
  constructor(xPos) {
    this.y = 20;
    this.x = xPos;
    this.height = 25;
    this.width = 25;
  }

  draw() {
    image(poopImg, this.x, this.y, this.height, this.width);
  }
}
