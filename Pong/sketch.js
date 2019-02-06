let puck;
let left;
let right;
var lr =  true;
function setup() {
  createCanvas(800,500);
  textSize(25);
  textAlign(CENTER, CENTER);
  puck = new Puck();
  left = new LeftPaddle();
  right = new RightPaddle();
}

function draw() {
  background(0);
  left.update(puck);
  right.update(puck);
  puck.edge();
  puck.colll(left);
  puck.collr(right);
  puck.update();

  left.display();
  right.display();
  puck.display();

}
