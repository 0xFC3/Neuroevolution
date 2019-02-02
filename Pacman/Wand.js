function Wand (x, y) {
  this.x = x;
  this.y = y;
  this.len  = kastlen;


  this.coll = function () {

    if (this.x < pac.x - buffer && this.x + this.len > pac.x - buffer && this.y - kastlen /2 < pac.y && this.y + this.len + kastlen /2 > pac. y) {
      checkl = true;
    }
    if (this.y < pac.y - buffer && this.y + this.len > pac. y - buffer && this.x - kastlen /2 < pac.x && this.x + this.len + kastlen /2 > pac.x ) {
      checku = true;
    }
    if (this.x < pac.x + buffer && this.x + this.len > pac.x + buffer && this.y - kastlen /2 < pac.y && this.y + this.len + kastlen /2 > pac. y) {
      checkr = true;
    }
    if (this.y < pac.y + buffer && this.y + this.len > pac. y + buffer && this.x - kastlen /2 < pac.x && this.x + this.len + kastlen /2 > pac.x) {
      checkd = true;
    }
  }

  this.display = function () {
    fill(59, 0, 255);
    rect(this.x, this.y, this.len, this.len);
  }
}
