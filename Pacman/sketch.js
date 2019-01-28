var pac;
var wands = [];
var essen = [];

var level1 = {1,1,1,1,1,
              1,0,2,0,1}

function setup() {
  createCanvas(800, 600);
  for (element of level1) {
    if (element == 1) {
      var neww = new Wand();
      wands.push(neww);
    }
    else if (element == 2) {
      pac = new Pac();
    }
    else if (element == 0) {

    }
  }


}

function draw() {
 background(0);
 pac.update();
 pac.display();
 for (wand of wands) {
   wand.display();
 }

}
