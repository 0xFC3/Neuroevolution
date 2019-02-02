function Monster (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.diameter = kastlen-5;



  this.coll = function () {
    if (this.x < pac.x - pac.diameter && this.x + this.diameter > pac.x - pac.diameter && this.y - kastlen /2 < pac.y && this.y + this.len + kastlen /2 > pac. y) {
      return true;
    }
    if (this.y < pac.y - pac.diameter && this.y + this.diameter > pac. y - pac.diameter && this.x - kastlen /2 < pac.x && this.x + this.len + kastlen /2 > pac.x ) {
      return true;
    }
    if (this.x < pac.x + pac.diameter && this.x + this.diameter > pac.x + pac.diameter && this.y - kastlen /2 < pac.y && this.y + this.len + kastlen /2 > pac. y) {
      return true;
    }
    if (this.y < pac.y + pac.diameter && this.y + this.diameter > pac. y + pac.diameter && this.x - kastlen /2 < pac.x && this.x + this.len + kastlen /2 > pac.x) {
      return true;
    }
  }

  this.display = function () {

    fill(7, 102, 255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
