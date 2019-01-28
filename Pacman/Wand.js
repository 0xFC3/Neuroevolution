function Wand (x, y) {
  this.x = x;
  this.y = y;
  this.len  = kastlen;


  this.coll = function () {

    if (this.x < pac.x - this.diameter && this.x + this.len > pac.x - this.diameter) {
      checkl = true;
    }
    if (this.y < pac.y - this.diameter && this.y + this.len > pac. y - this.diameter) {
      checku = true;
    }
    if (this.x < pac.x + this.diameter && this.x + this.len > pac.x + this.diameter) {
      checkr = true;
    }
    if (this.y < pac.y + this.diameter && this.y + this.len > pac. y + this.diameter) {
      checkd = true;
    }
  }

  this.display = function () {
    fill(59, 0, 255);
    rect(this.x, this.y, this.len, this.len);
  }
}
