class Shit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
  }

  draw() {
    image(poop, this.x, this.y, this.width, this.height);
    this.y += 10;
  }
}
