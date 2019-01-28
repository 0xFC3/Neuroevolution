var pac;
var wands = [];
var essen = [];
const kastlen = 50;
let checku = false;
let checkl = false;
let checkr = false;
let checkd = false;

var level1 = [[1,1,1,1,1], [1,0,2,0,1]]

function setup() {
  createCanvas(800, 600);
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
      x += kastlen;
    }
    y += kastlen;
    x = 0;


  }


}

function draw() {
 background(0);
 pac.update();
 pac.display();
 for (wand of wands) {
   wand.display();
 }
 for (kirsche of essen) {
   kirsche.display();
 }

}
