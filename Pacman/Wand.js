function Wand (x, y) {
  this.x = x;
  this.y = y;
  this.len  = kastlen;


  this.coll = function () {

    if (this.x < pac.x - pac.diameter /2 && this.x + this.len > pac.x - pac.diameter/2 && this.y < pac.y && this.y + this.len > pac. y) {
      checkl = true;
    }
    if (this.y < pac.y - pac.diameter/2 && this.y + this.len > pac. y - pac.diameter/2 && this.x < pac.x && this.x + this.len > pac.x ) {
      checku = true;
    }
    if (this.x < pac.x + pac.diameter/2 && this.x + this.len > pac.x + pac.diameter/2 && this.y < pac.y && this.y + this.len > pac. y) {
      checkr = true;
    }
    if (this.y < pac.y + pac.diameter/2 && this.y + this.len > pac. y + pac.diameter/2 && this.x < pac.x && this.x + this.len > pac.x) {
      checkd = true;
    }
  }

  this.display = function () {
    fill(59, 0, 255);
    rect(this.x, this.y, this.len, this.len);
  }
}
