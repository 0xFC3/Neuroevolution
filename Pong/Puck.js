var speed = [-5,-4,-2,2,4,5];
function Puck () {

  this.x = width / 2;
  this.y = height / 2;
  this.xspeed = speed[int(random(0,5))];
  if (Math.sign(this.xspeed) == 1) {
    lr = true;
  }
  else {
    lr = false;
  }
  this.yspeed = speed[int(random(0,5))];
  this.diameter = 25;
  this.s1 = 0;
  this.s2 = 0;


  this.reset = function(a) {
    this.x = width / 2;
    this.y = height / 2;
    this.xspeed = speed[int(random(0,5))];
    if (Math.sign(this.xspeed) == 1) {
      lr = true;
    }
    else {
      lr = false;
    }
    this.yspeed = speed[int(random(0,5))];
    if (a == 0) {
      this.s2 += 1;
    }
    else {
      this.s1 += 1;
    }
  }

  this.update = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  this.edge = function () {
    if (this.y + this.diameter / 2 > height) {
      this.yspeed *= -1;
    }
    if (this.y - this.diameter / 2 < 0) {
      this.yspeed *= -1;
    }
    if (this.x + this.diameter / 2 > width) {
      this.reset(1);
    }
    if (this.x - this.diameter / 2 < 0) {
      this.reset(0);
    }
  }

  this.colll = function(left) {
    if(this.x - this.diameter < left.x + left.w && left.y < this.y && left.y + left.h > this.y) {
      if (lr == false) {
        lr = true;
        this.xspeed *= -1;
        if (left.move == true) {
          this.xspeed *= 1.3;
        }
      }
    }
  }
  this.collr = function(right) {

    if (this.x + this.diameter > right.x && right.y < this.y && right.y + right.h > this.y) {
      if (lr == true) {
        lr = false;
        this.xspeed *= -1;
        if (right.move == true) {
          this.xspeed *= 1.3;
        }
      }
    }
  }
  this.display = function () {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(255);
    text(this.s1, 40,40);
    fill(255);
    text(this.s2,  width - 40, 40);
  }
}
