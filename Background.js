class Background {
  constructor() {
    this.x = 0;
    this.y = 300;
    this.width = CANVASWIDTH;
    this.height = 300;
  }

  draw() {
    this.x -= 1;

    image(backgroundImage, this.x, this.y, this.width, this.height);
    image(
      backgroundImage,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}
