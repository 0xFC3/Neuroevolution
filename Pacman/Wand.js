function Wand (x, y) {
  this.x = x;
  this.y = y;
  this.len  = kastlen;


  this.coll = function (thing) {

    if (this.x < thing.x - buffer && this.x + this.len > thing.x - buffer && this.y - kastlen /2 < thing.y && this.y + this.len + kastlen /2 > thing. y) {
      checkl = true;
    }
    if (this.y < thing.y - buffer && this.y + this.len > thing. y - buffer && this.x - kastlen /2 < thing.x && this.x + this.len + kastlen /2 > thing.x ) {
      checku = true;
    }
    if (this.x < thing.x + buffer && this.x + this.len > thing.x + buffer && this.y - kastlen /2 < thing.y && this.y + this.len + kastlen /2 > thing. y) {
      checkr = true;
    }
    if (this.y < thing.y + buffer && this.y + this.len > thing. y + buffer && this.x - kastlen /2 < thing.x && this.x + this.len + kastlen /2 > thing.x) {
      checkd = true;
    }
  }

  this.display = function () {
    fill(59, 0, 255);
    rect(this.x, this.y, this.len, this.len);
  }
}
