class Player {
  constructor(x,y,size) {
    this.x=x;
    this.y=y;
    this.size = size || 20;
  }

  drawSelf() {
    fill(255,0,0);
    rect(this.x, this.y, this.size, this.size);
  }

  move() {
    if (reg[LEFT_ARROW]) {
      this.x-=15;
    }
    if (reg[RIGHT_ARROW]) {
      this.x+=15;
    }
    if (reg[UP_ARROW]) {
      this.y-=15;
    }
    if (reg[DOWN_ARROW]) {
      this.y+=15;
    }
  }
}
