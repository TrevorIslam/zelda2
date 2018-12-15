var player;
var flowers = [];
var mushrooms = [];
var grass;
var reg = {};

function setup() {
  createCanvas(500,500);
  grass = new Grass();
  player = new Player(250,250);
  // for (let i = 0; i<500/32; i++) {
  //   flowers.push(new Flower(32*i,0));
  // }
  //mushrooms.push(new Mushroom(0,0));
};

function draw() {
  noStroke();
  background(255);
  grass.draw();
  for(let i of flowers) {
    i.draw();
  }
  for(let m of mushrooms) {
    m.draw();
  }
  player.drawSelf();
  player.move();
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
