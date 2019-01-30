function Pac (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.speed = 2;
  this.diameter = kastlen-5;



  this.update = function() {
    for (wand of wands) {
      wand.coll()
    }
    if (keyIsDown(87) && checku == false) {
      this.moveUp();
    }
    else if (keyIsDown(83 ) && checkd == false) {
      this.moveDown();
    }
    else if (keyIsDown(65) && checkl == false) {
      this.moveLeft();
    }
    else if (keyIsDown(68) && checkr == false) {
      this.moveRight();
    }
    checku = false;
    checkl = false;
    checkr = false;
    checkd = false;
  }

  this.moveUp = function() {
    this.y -= this.speed;
  }
  this.moveDown = function() {
    this.y += this.speed;
  }
  this.moveRight = function() {
    this.x += this.speed;
  }
  this.moveLeft = function() {
    this.x -= this.speed;
  }
  this.display = function () {
    fill(255, 238, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
