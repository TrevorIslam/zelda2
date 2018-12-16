class Player {
  constructor(x,y,size) {
    this.x=x;
    this.y=y;
    this.size = size || 20;
    this.sprite = new Sprite(trainerImg, 4, 6, 64, 64);
  }

  drawSelf() {
    this.sprite.draw(this.x,this.y,32,32);
  }

  move() {
    var xvel = 0;
    var yvel = 0;

    if (reg[LEFT_ARROW]) {
      xvel = -5;
      yvel = 0;
      this.sprite.animationNumber = 1;
    }
    if (reg[RIGHT_ARROW]) {
      xvel = 5;
      yvel = 0;
      this.sprite.animationNumber = 2;
    }
    if (reg[UP_ARROW]) {
      yvel = -5;
      xvel = 0;
      this.sprite.animationNumber = 3;
    }
    if (reg[DOWN_ARROW]) {
      yvel = 5;
      xvel = 0;
      this.sprite.animationNumber = 0;
    }
    if (xvel == 0 && yvel == 0) {
      this.sprite.frameSpeed = 0;
      this.sprite.frame = 0;
    } else {
      this.sprite.frameSpeed = 6;
    }
    if (xvel > 0) {
      for (let i = xvel; i > 0; i--) {
        if (placeFree(this.x + i, this.y)) {
          this.x += i;
          break;
        }
      }
    } else if (xvel < 0) {
      for (let i = xvel; i < 0; i++) {
        if (placeFree(this.x + i, this.y)) {
          this.x += i;
          break;
        }
      }
    }
    if (yvel > 0) {
      for (var j = yvel; j > 0; j--) {
        if (placeFree(this.x, this.y + j)) {
          this.y += j;
          break;
        }
      }
    } else if (yvel < 0) {
      for (var j = yvel; j < 0; j++) {
        if (placeFree(this.x, this.y + j)) {
          this.y += j;
          break;
        }
      }
    }
  }
  static update () {
    player.drawSelf();
    player.move();
  }
}
