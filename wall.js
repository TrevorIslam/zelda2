class Wall {
  constructor (x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w || 32;
    this.h = h || 32;
  }

  draw () {
    image(wallImg, this.x, this.y, this.w, this.h);
  }

  static update () {
    for(let w of walls) {
      w.draw();
    }
  }
}
