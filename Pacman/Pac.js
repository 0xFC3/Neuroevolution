function Pac (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.speed = 2;
  this.diameter = kastlen-5;


  this.update = function() {
    for (wand of wands) {
      wand.coll()
    }
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


    if (checkd == false) {
      freespaces.push(2);
    }
    if (checku == false) {
      freespaces.push(0);
    }
    if (checkr == false) {
      freespaces.push(1);
    }
    if (checkl == false) {
      freespaces.push(3);
    }
    console.log(freespaces);

    for (element of freespaces) {
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

    freespaces = [];
    checkd = false;
    checku = false;
    checkl = false;
    checkr = false;
    stuck = true;
  }


  this.display = function () {
    fill(255, 238, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
