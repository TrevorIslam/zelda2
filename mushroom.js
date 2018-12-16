class Mushroom {
  constructor (x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w || 32;
    this.h = h || 32;
    this.sprite = new Sprite (mushroomImg, 3, 10, 50, 50);
  }

  draw () {
    this.sprite.draw(this.x, this.y, 64, 64)
  }

  static update () {
    for(let m of mushrooms) {
      m.draw();
    }
  }
}
