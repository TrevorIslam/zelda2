class Player {
  constructor(x,y,size) {
    this.x=x;
    this.y=y;
    this.size = size || 20;
    this.sprite = new Sprite(trainerImg, 4, 6, 64, 64);
  }

  drawSelf() {
    this.sprite.draw(this.x,this.y,64,64);
  }

  move() {
    var xvel = 0;
    var yvel = 0;

    if (reg[LEFT_ARROW]) {
      xvel = -5;
      this.sprite.animationNumber = 1;
    }
    if (reg[RIGHT_ARROW]) {
      xvel = 5;
      this.sprite.animationNumber = 2;
    }
    if (reg[UP_ARROW]) {
      yvel = -5;
      this.sprite.animationNumber = 3;
    }
    if (reg[DOWN_ARROW]) {
      yvel = 5;
      this.sprite.animationNumber = 0;
    }
    if (xvel == 0 && yvel == 0) {
      this.sprite.frameSpeed = 0;
      this.sprite.frame = 0;
    } else {
      this.sprite.frameSpeed = 6;
    }
    this.x+=xvel;
    this.y+=yvel;
  }
}
