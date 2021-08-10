class Player {
  constructor() {
    this.y = 0;
    this.x = 20;
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

    image(pigeon[currentPigeonIndex], this.x, this.y, this.height, this.width);
    currentPigeonIndex++;
    if (currentPigeonIndex > 4) {
      currentPigeonIndex = 0;
    }

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
