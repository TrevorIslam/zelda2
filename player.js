class Player {
  constructor(x,y,w,h) {
    this.x=x;
    this.y=y;
    this.w=w || 32;
    this.h=h || 32;
    this.sprite = new Sprite(trainerImg, 4, 6, 64, 64);
  }

  drawSelf() {
    this.sprite.draw(this.x,this.y,this.w,this.h);
  }

  move() {
    let right = 0;
    let left = 0;
    let up = 0;
    let down = 0;
    if (reg[RIGHT_ARROW]) {
      right = 1;
      this.sprite.animationNumber = 2;
    }
    if (reg[LEFT_ARROW]) {
      left = 1;
      this.sprite.animationNumber = 1;
    }
    if (reg[UP_ARROW]) {
      up = 1;
      this.sprite.animationNumber = 3;
    }
    if (reg[DOWN_ARROW]) {
      down = 1;
      this.sprite.animationNumber = 0;
    }
    var xdir = right - left;
    var ydir = down - up;

    for (let s = 5; s > 0; s--) {
      if (placeFree(player.x + s * xdir, player.y)) {
        player.x += s * xdir;
        this.sprite.frameSpeed = 6;
        break;
      } else {
        this.sprite.frameSpeed = 0;
      }
    }
    for (let s = 5; s > 0; s--) {
      if (placeFree(player.x, player.y + s * ydir)) {
        player.y += s * ydir;
        this.sprite.frameSpeed = 6;
        break;
      } else {
        this.sprite.frameSpeed = 0;
      }
    }

    if (!(up || down || left || right)) {
      this.sprite.frame = 0;
      this.sprite.frameSpeed = 0;
    }
  }
  static update () {
    player.drawSelf();
    player.move();
  }
}
