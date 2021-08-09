class Background {
  constructor() {
    this.bgx = 0;
    this.bgy = 200;
    this.swx = 0;
    this.swy = 450;
    this.width = CANVASWIDTH;
    this.bgHeight = 400;
    this.swHeight = 150;

    this.bgSpeed = 0.2;
    this.swSpeed = 1;
  }

  draw() {
    this.bgx -= this.bgSpeed;
    this.swx -= this.swSpeed;

    image(backgroundImage, this.bgx, this.bgy, this.width, this.bgHeight);
    image(
      backgroundImage,
      this.bgx + this.width,
      this.bgy,
      this.width,
      this.bgHeight
    );
    image(sidewalkImage, this.swx, this.swy, this.width, this.swHeight);
    image(
      sidewalkImage,
      this.swx + this.width,
      this.swy,
      this.width,
      this.swHeight
    );
    if (this.bgx <= -this.width) {
      this.bgx = 0;
    }
    if (this.swx <= -this.width) {
      this.swx = 0;
    }
  }
}
