function Pac (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.speed = 2;
  this.diameter = kastlen-5;


  this.update = function() {

    if (keyIsDown(87)) {
      direction = 0;
    }
    else if (keyIsDown(83 )) {
      direction = 2;
    }
    else if (keyIsDown(65)) {
      direction = 3;
    }
    else if (keyIsDown(68)) {
      direction = 1;
    }

    freespacesplayer = findFreespaces(pac);



    for (element of freespacesplayer) {
      if (direction == element) {
        olddir = direction;
      }
      if (olddir == element) {
        stuck = false;
      }
    }
    if (stuck == false) {
      if (olddir == 0) {
        this.y -= this.speed;
      }
      else if (olddir == 1) {
        this.x += this.speed;
      }
      else if (olddir == 2) {
        this.y += this.speed;
      }
      else if (olddir ==3) {
        this.x -= this.speed;
      }
    }

    freespacesplayer = [];

    stuck = true;
  }


  this.display = function () {
    fill(255, 238, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
