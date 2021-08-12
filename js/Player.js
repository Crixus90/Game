class Player {
  constructor() {
    this.y = 0;
    this.x = 50;
    this.height = 50;
    this.width = 50;
    this.velocity = 0;
    this.jumpHeight = 3;
  }

  jump() {
    this.y -= 10;
    this.velocity -= this.jumpHeight;
  }
  setup() {}

  draw() {
    this.velocity += GRAVITY;
    this.y += this.velocity;

    if (frameCount % 3 === 0) {
      currentPigeonIndex++;
    }

    image(
      pigeon[currentPigeonIndex % pigeon.length],
      this.x,
      this.y,
      this.height,
      this.width
    );

    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
    }
  }
  get floor() {
    return 600 - this.height;
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
