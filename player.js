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
    
  }
}
