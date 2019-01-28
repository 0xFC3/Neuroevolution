
function Colum(num) {
  this.w = 50;
  this.spalt = 350;
  this.h1 = random(50,300) ;
  this.h2 = height - this.h1 - this.spalt;
  if (num == 1) {
    this.x = width + this.w;
  }
  else {
    this.x = width + width /2 +  2 * this.w;
  }
  this.y1 = 0;
  this.y2 = height - this.h2;

  this.update = function() {
    this.x -= 2;
  }
  this.edge = function() {
    if (this.x + this.w < 0) {
      this.x = width + this.w;
      this.h1 = random(50,300) ;
      this.h2 = height - this.h1 - this.spalt;
      this.y1 = 0;
      this.y2 = height - this.h2;
    }
  }

  this.display = function () {
     fill(0, 255, 29);
     rect(this.x, this.y2, this.w, this.h2);
     rect(this.x, this.y1, this.w, this.h1);
   }
}
