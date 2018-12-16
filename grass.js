class Grass {
  constructor () {
  }

  draw () {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        image(grassImg, 64*i, 64*j, 64, 64);
      }
    }
  }
  static update () {
    grass.draw();
  }
}
