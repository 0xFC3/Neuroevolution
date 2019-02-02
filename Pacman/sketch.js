var pac; //player
var wands = []; //walls
var essen = []; //food
var monsters = []; //monsters
var gamestart = false; //check if game has started
const kastlen = 50; //grid length
let direction = 1; //input direction of player
let olddir = 1; //direction player is actually going
var freespaces = []; //spaces next to the player where there is no wall
// variables that state if somthing is next to the player
let checkd = false;
let checku = false;
let checkl = false;
let checkr = false;
let stuck = true; //tells if player is walking into a wall
const buffer = 26; //shortest distance between wall an player
let lives = 3; //lives of the player


var level1 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
              [1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1],
              [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
              [1,0,0,0,1,1,1,3,3,1,0,1,0,1,0,1],
              [1,0,1,0,1,0,1,3,3,1,0,1,0,0,0,1],
              [1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1],
              [1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1],
              [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
              [1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1],
              [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]] // level layout

function setup() {
  createCanvas(800, 600);
  background(0);
  buildGame();



}

function draw() {
  if (gamestart == true) {
    background(0);
    pac.update();
    pac.display();

    for (wand of wands) {
      wand.display();
    }
    let i = 0;
    for (kirsche of essen) {
      kirsche.coll(i);
      kirsche.display();
      i++;
    }
    for (monster of monsters) {
      if (monster.coll() == true && lives != 0) {
        reset();
      }
      else if (monster.coll() == true && lives == 0) {
        gameOver();
      }
      monster.display();
    }
    if (essen.length == 0) {
      gameOver();
    }
  }


}
function keyPressed () {
  if (keyCode === RIGHT_ARROW) {
    gamestart = true;
  }
}

function reset() {
  lives -= 1;
  monsters = [];
  let x = 0;
  let y = 0;
  for (row of level1) {

    for (column of row) {
      if (column == 2) {
        pac = new Pac(x, y);
      }
      else if (column == 3) {
        var newm = new Monster(x, y);
        monsters.push(newm);
      }
      x += kastlen;
    }
    y += kastlen;
    x = 0;


  }

}

function gameOver() {
  gamestart = false;
  essen = [];
  wands = [];
  monsters = [];
  lives = 3;
  buildGame();

}

function buildGame() {
  let x = 0;
  let y = 0;
  for (row of level1) {

    for (column of row) {
      if (column == 1) {
        var neww = new Wand(x, y);
        wands.push(neww);
      }
      else if (column == 2) {
        pac = new Pac(x, y);
      }
      else if (column == 0) {
        var newe = new Kirsche(x, y);
        essen.push(newe);
      }
      else if (column == 3) {
        var newm = new Monster(x, y);
        monsters.push(newm);
      }
      x += kastlen;
    }
    y += kastlen;
    x = 0;


  }
}
