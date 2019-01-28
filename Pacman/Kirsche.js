function Kirsche () {
  this.x;
  this.y;
  this.diameter = 5;



  this.display = function () {
    fill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
