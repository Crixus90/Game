class Player {
  constructor() {
    this.y = 0;
    this.x = 20;
    this.height = 100;
    this.width = 100;
    this.velocity = 0;
    this.jumpHeight = 5;
  }

  jump() {
    this.y -= 15;
    this.velocity -= this.jumpHeight;
  }
  setup() {}

  draw() {
    this.velocity += GRAVITY;
    this.y += this.velocity;

    image(pigeon[currentImageIndex], this.x, this.y, this.height, this.width);
    currentImageIndex++;
    if (currentImageIndex > 4) {
      currentImageIndex = 0;
    }

    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
    }
  }
  get floor() {
    return 600 - this.height;
  }
}
