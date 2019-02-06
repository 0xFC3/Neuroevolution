var paddlespeed = 10;

function RightPaddle () {
  this.h = 80;
  this.w = 20;
  this.x = width - this.w - 10;
  this.y = height / 2 - this.h / 2;
  this.move = false;

  this.update = function(ball) {
    /*
    this.y = ball.y - this.h / 2;
    this.move = true;
    */
    if (keyIsDown(75) && this.y - paddlespeed > 0) {
      this.y -= paddlespeed;
      this.move = true;
    }
    else if (keyIsDown(75)) {
      this.y = 0;
      this.move = true;
    }
    if (keyIsDown(77) && this.y + paddlespeed + this.h < height) {
      this.y += paddlespeed;
      this.move = true;
    }
    else if (keyIsDown(77)) {
      this.y = height - this.h;
      this.move = true;
    }
    
  }

  this.display = function() {
    this.move = false;
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}
