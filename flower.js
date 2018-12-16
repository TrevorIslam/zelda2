class Flower {
  constructor (x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w || 32;
    this.h = h || 32;

    this.sprite = new Sprite(flowerImg, 4, 30, 32, 32);
  }

  draw() {
    this.sprite.draw(this.x, this.y, 32, 32);
  }

  static update () {
    for(let i of flowers) {
      i.draw();
    }
  }
}
