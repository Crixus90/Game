class Man {
  constructor() {
    this.y = 400;
    this.x = 1000;
    this.height = 120;
    this.width = 120;
    this.spawnTime = 1000;
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

    this.x -= 3;

    if (this.x <= -this.width) {
      this.x = this.spawnTime;
    }
  }
}
