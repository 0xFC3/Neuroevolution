function Boost (x, y) {
  this.x = x + kastlen /2;
  this.y = y + kastlen /2;
  this.diameter = kastlen / 4;
  this.buf = 5;

  this.coll = function(ind) {
    if (this.x < pac.x + this.buf && this.x > pac.x - this.buf && this.y < pac.y + this.buf && this.y > pac.y - this.buf) {
      boosts.splice(ind, 1);
      boostMode = true;
    }
  }

  this.display = function () {
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
