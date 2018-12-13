class Flower {
  constructor (x, y) {
    this.x = x;
    this.y = y;

    this.sprite = new Sprite(flowerImg, 4, 30, 32, 32);
  }

  draw() {
    this.sprite.draw(this.x, this.y, 32, 32);
  }
}
