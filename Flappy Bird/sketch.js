var gamestart = false;
const TOTAL = 500;
var birds = [];
var savedBirds = [];
var bestBird;
var col1;
var col2;
var gen;
var slider;
var show = false;

function setup() {
  createCanvas(400,600);
  textSize(25);
  slider = createSlider(1,100,1);
  bestBird = new Bird();
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  background(132, 177, 249);
  col1 = new Colum(1);
  col2 = new Colum(2);
  gen = new genanzeige();

}

function draw() {
  if (gamestart == true && show == false) {
    for (let b = 0; b < slider.value(); b++) {

      col1.update();
      col2.update();
      col1.edge();
      col2.edge();
      var i = 0;
      for (let bird of birds) {
        bird.update();
        bird.think(col1, col2);
        bird.scorecalc(col1, col2);
        bird.edges(col1,col2, birds, i);
        bird.collision(col1, col2, birds, i);

        i += 1;
      }
    }
    background(132, 177, 249);
    col1.display();
    col2.display();
    gen.display();
    for (let bird of birds) {
      bird.display();
    }


  }
  else if (gamestart == true && show == true) {
    for (let b = 0; b < slider.value(); b++) {
      col1.update();
      col2.update();
      col1.edge();
      col2.edge();
      bestBird.update();
      bestBird.think(col1, col2);
      bestBird.scorecalc(col1, col2);
      bestBird.edges(col1,col2, birds, TOTAL + 1);
      bestBird.collision(col1, col2, birds, TOTAL + 1);

    }
    background(132, 177, 249);
    col1.display();
    col2.display();
    bestBird.display();

  }

}




function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    show = true;
  }

  if (keyCode === RIGHT_ARROW) {
    gamestart = true;
  }
}
