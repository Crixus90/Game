class Poo {
  constructor() {
    this.y = 20;
    this.x = 600;
    this.height = 25;
    this.width = 25;
    this.poops = [];
  }

  draw() {
    image(poopImg, this.x, this.y, this.height, this.width);
    image(poopImg, this.x + this.width * 2, this.y, this.height, this.width);
    image(poopImg, this.x + this.width * 4, this.y, this.height, this.width);
  }
}
