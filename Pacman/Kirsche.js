function Kirsche (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.diameter = kastlen / 4;
  this.buf = 5;

  this.coll = function(ind) {
    if (this.x < pac.x + this.buf && this.x > pac.x - this.buf && this.y < pac.y + this.buf && this.y > pac.y - this.buf) {
      essen.splice(ind, 1);
    }
  }

  this.display = function () {
    fill(252, 0, 231);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
