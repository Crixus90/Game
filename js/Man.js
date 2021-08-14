class Man {
  constructor() {
    this.y = 400;
    this.x = 1000;
    this.height = 120;
    this.width = 120;
    this.spawnTime = 1000;
    this.speed = 2;
  }

  draw() {
    if (frameCount % 3 === 0) {
      currentManIndex++;
    }
    image(
      man[currentManIndex % man.length],
      this.x,
      this.y,
      this.height,
      this.width
    );

    this.x -= this.speed;

    if (this.x <= -this.width) {
      this.x = this.spawnTime;
    }
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
