class Game {
  constructor() {
    this.set();
  }

  set() {
    this.player = new Player();
    this.man = new Man();
    this.background = new Background();
    this.shit = new Shit(this.player.x, this.player.y);
    this.powerLines = [];
    this.poops = [];
    this.poopAmmo = 3;
    this.poopImg = new Poo();
    this.poopAmmoImgArr = [new Poo(600), new Poo(625), new Poo(650)];
    this.isDead = false;
    this.chips = [];

    //game settings
    this.score = 0;
    this.score2 = 0;
    this.highScore = 0;
    this.difficulty = 1;
    this.amount = 600;
  }

  setup() {
    background("orange");
    canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
  }

  draw() {
    clear();

    this.background.draw();
    this.poopAmmoImgArr.forEach((poopImg, index) => {
      poopImg.draw();
    });

    if (frameCount % this.amount === 0) {
      this.powerLines.push(new Powerline(this.difficulty));
    }
    this.powerLines.forEach((powerLine, index) => {
      powerLine.draw();

      if (powerLine.rightSide <= 0) {
        this.powerLines.splice(index, 1);
      }

      if (this.collisionCheck(this.player, powerLine) || this.player.y > 540) {
        this.score = 0;
        this.score2 = 0;
        this.gameDifficulty = 1;
        scoreHolder.innerText = this.score;
        this.isDead = true;
        this.player.x -= this.difficulty;
        startGame = false;
      }
    });
    if (frameCount % 1000 === 0) {
      this.chips.push(new Chippy());
    }
    this.chips.forEach((chip, index) => {
      chip.draw();
      if (chip.rightSide <= 0) {
        this.chips.splice(index, 1);
      }
      if (this.chipCollisionCheck(chip, this.player)) {
        this.chips.splice(index, 1);
        this.eatsound();
        this.poopAmmo++;
        this.poopAmmoImgArr.push(new Poo());
      }
    });
    if (this.player.y > 540) {
      this.score = 0;
      this.score2 = 0;
      this.gameDifficulty = 1;
      scoreHolder.innerText = this.score;
      poopHolder.innerText = this.score2;
      this.isDead = true;
      this.player.x -= this.difficulty;
      startGame = false;
    }
    this.man.draw();
    this.player.draw();
    this.player.setup();

    if (frameCount % 240 === 0) {
      this.difficulty += 0.5;
      this.amount -= 10;
      console.log("difficulty:" + this.difficulty);
      console.log("amount:" + this.amount);
    }

    this.poops.forEach((poop, index) => {
      poop.draw();

      if (poop.bottomSide <= 0) {
        this.poops.splice(index, 1);
      }

      if (this.poopCollisionCheck(poop, this.man)) {
        this.poops.splice(index, 1);
        this.score2++;
        poopHolder.innerText = this.score2;
        console.log("shit landed");
      }
    });

    //score
    if (frameCount % 60 === 0) {
      this.score++;
      scoreHolder.innerText = this.score + "m";
    }
  }

  keyPressed() {
    if (!this.isDead) {
      if (keyCode === UPARROW) {
        this.player.jump();
      }
      if (keyCode === DOWNARROW && this.poopAmmo > 0) {
        this.poopAmmo--;
        this.poopsound();
        this.poops.push(new Shit(this.player.x, this.player.y));
        this.poopAmmoImgArr.pop();
      }
    }
  }

  collisionCheck(player, obstacle) {
    if (player.bottomSide < obstacle.topSide) {
      return false;
    }

    if (player.rightSide < obstacle.leftSide) {
      return false;
    }

    if (player.leftSide > obstacle.rightSide) {
      return false;
    }

    if (player.topSide > obstacle.bottomSide) {
      return false;
    }

    return true;
  }

  poopCollisionCheck(poop, man) {
    if (poop.bottomSide < man.topSide) {
      return false;
    }

    if (poop.rightSide < man.leftSide) {
      return false;
    }

    if (poop.leftSide > man.rightSide) {
      return false;
    }

    if (poop.topSide > man.bottomSide) {
      return false;
    }

    return true;
  }
  chipCollisionCheck(chip, player) {
    if (chip.bottomSide < player.topSide) {
      return false;
    }

    if (chip.rightSide < player.leftSide) {
      return false;
    }

    if (chip.leftSide > player.rightSide) {
      return false;
    }

    if (chip.topSide > player.bottomSide) {
      return false;
    }

    return true;
  }

  poopsound() {
    let poopSound = document.getElementById("poopSound");
    poopSound.play();
  }
  eatsound() {
    let eatSound = document.getElementById("eatsound");
    eatSound.play();
  }
}
