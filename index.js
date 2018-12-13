var player;
var flowers = [];
var reg = {};

function setup() {
  createCanvas(500,500);
  player = new Player(250,250);
  for (let i = 0; i<10; i++) {
    flowers.push(new Flower(50*i,0));
  }
};

function draw() {
  noStroke();
  background(255);
  for(let i of flowers) {
    i.draw();
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
