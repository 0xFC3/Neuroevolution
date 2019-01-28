function Pac () {
  this.x = 300;
  this.y = 300;
  this.speed = 2;
  this.diameter = 25;


  this.update = function() {
    if (keyIsDown(87)) {
      this.moveUp();
    }
    else if (keyIsDown(83)) {
      this.moveDown();
    }
    else if (keyIsDown(65)) {
      this.moveLeft();
    }
    else if (keyIsDown(68)) {
      this.moveRight();
    }
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
