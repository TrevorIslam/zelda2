var player;
var flowers = [];
var mushrooms = [];
var grass;
var walls = [];
var reg = {};

function setup() {
  createCanvas(512,512);
  grass = new Grass();
  player = new Player(250,250);
  for (let i=0;i<16;i++) {
    newObj(Wall, walls, i * 32, 0);
  }
};

function draw() {
  noStroke();
  background(255);
  update();
};

function keyPressed() {
  reg[keyCode] = true;
};
function keyReleased() {
  reg[keyCode] = false;
};

function getKey(name) {
  return name.charCodeAt(0);
};

function newObj (className, arrayName, x, y) {
  arrayName.push(new className(x,y));
}

function update () {
  Grass.update();
  Wall.update();
  Flower.update();
  Mushroom.update();
  Player.update();
}

function collision (r1, r2) {
  if (r1.x + r1.w > r2.x &&
      r1.x < r2.x + r2.w &&
      r2.y + r2.h > r1.y &&
      r2.y < r1.y + r1.h) {
        return true;
  } else {
    return false;
  }
}

function placeFree (xNew, yNew) {
  var temp = {x: xNew, y: yNew, w: player.w, h: player.h};

  for(let i = 0; i < walls.length; i++) {
    console.log(walls.length);
    if (collision(walls[i], temp)) {
      return false;
    }
  }
  return true;
};
