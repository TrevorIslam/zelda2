class Grass {
  constructor () {
  }

  draw () {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
      image(grassImg, 50*i, 50*j, 50, 50);
      }
    }
  }
}
