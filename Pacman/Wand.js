function Wand () {
  this.x;
  this.y;
  this.len;

  


  this.display = function () {
    fill(59, 0, 255);
    rect(this.x, this.y, this.len, this.len);
  }
}
