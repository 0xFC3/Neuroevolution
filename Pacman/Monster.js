function Monster (x, y) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.diameter = kastlen-5;
  this.speed = 2;
  this.direction = 0;


  this.update = function (monster) {
    freespacesmonster = findFreespaces(monster);
    if (freespacesmonster.length >= 3) {
      this.direction = freespacesmonster[Math.floor(Math.random() * 4)]
    }
    else if (freespacesmonster.length == 1) {
      this.direction = freespacesmonster[0];
    }

    if (this.direction == 0) {
      this.y -= this.speed;
    }
    else if (this.direction == 1) {
      this.x += this.speed;
    }
    else if (this.direction == 2) {
      this.y += this.speed;
    }
    else if (this.direction ==3) {
      this.x -= this.speed;
    }

  }


  this.coll = function () {
    if (this.x - buffer < pac.x - buffer && this.x + buffer > pac.x - buffer && this.y - buffer < pac.y && this.y + buffer > pac. y) {
      return true;
    }
    if (this.y - buffer < pac.y - buffer && this.y + buffer > pac. y - buffer && this.x - buffer < pac.x && this.x + buffer > pac.x ) {
      return true;
    }
    if (this.x - buffer < pac.x + buffer && this.x + buffer > pac.x + buffer && this.y - buffer < pac.y && this.y + buffer > pac. y) {
      return true;
    }
    if (this.y  - buffer < pac.y + buffer && this.y + buffer > pac. y + buffer && this.x - buffer < pac.x && this.x + buffer > pac.x) {
      return true;
    }

    return false;
  }

  this.display = function () {
    if (boostMode == true) {
      fill(53, 232, 37);
    }
    else {
      fill(7, 102, 255);
    }
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
