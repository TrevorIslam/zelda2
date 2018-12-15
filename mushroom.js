class Mushroom {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = new Sprite (mushroomImg, 3, 10, 50, 50);
  }

  draw () {
    this.sprite.draw(this.x, this.y, 50, 50)
  }
}
