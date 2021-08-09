class Man {
  constructor() {
    this.y = 460;
    this.x = 1000;
    this.height = 120;
    this.width = 120;
    this.spawnTime = 1000;
  }

  draw() {
    image(man[currentManIndex], this.x, this.y, this.height, this.width);
    currentManIndex++;
    if (currentManIndex > 6) {
      currentManIndex = 0;
    }

    this.x -= 3;

    if (this.x <= -this.width) {
      this.x = this.spawnTime;
    }
  }
}
