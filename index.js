var player;
var reg = {};

function setup() {
  createCanvas(500,500);
  player = new Player(250,250);
};

function draw() {
  noStroke();
  background(50);
  player.drawSelf();
};

function keyPressed() {
  reg[keyCode] = true;
};
function keyReleased() {
  reg[keyCode] = false;
};
