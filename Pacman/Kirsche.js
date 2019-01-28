function Kirsche (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.diameter = kastlen / 3;



  this.display = function () {
    fill(252, 0, 231);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
