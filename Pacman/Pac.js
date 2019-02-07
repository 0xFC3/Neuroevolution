function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}



function Pac (x, y, brain) {
  this.x = x + kastlen / 2;
  this.y = y + kastlen / 2;
  this.speed = 2;
  this.diameter = kastlen-5;
  this.score = 0;
  this.fitness = 0;

  if (brain) {
    this.brain = brain.copy();
    this.brain.mutate(mutate);
  }
  else {
    this.brain = new NeuralNetwork(10, 20, 4);
  }

  this.think = function(monsters, wands, essen) {
    freespacesplayer = findFreespaces(pac);
    var nearMonster = findNearest(monsters);
    var nearKirsche = findNearest(essen);

    let inputs = [];
    inputs[0] = this.x / width;
    inputs[1] = this.y / height;
    inputs[2] = nearMonster[0] / width;
    inputs[3] = nearMonster[1] / height;
    inputs[4] = nearKirsche[0] / width;
    inputs[5] = nearKirsche[1] / height;
    inputs[6] = 0;
    inputs[7] = 0;
    inputs[8] = 0;
    inputs[9] = 0;

    for (element of freespacesplayer) {
      if (element == 0) {
        inputs[6] = 1;
      }
      else if (element == 1) {
        inputs[7] = 1;
      }
      else if (element == 2) {
        inputs[8] = 1;
      }
      else if (element == 3) {
        inputs[9] = 1;
      }
    }

    let output = this.brain.predict(inputs);
    let highi;
    let high = -1;
    let i = 0;
    for (element of output) {
      if (element > high) {
        high = element;
        highi = i;
      }
      i++;
    }
    direction = highi
  }

  this.update = function() {


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

function findNearest(liste) {
  let high = width + height;
  let coor = [0,0];
  for (let element of liste) {
    let dist = 0;
    if (pac.x < element.x) {
      dist += element.x - pac.x;
    }
    else {
      dist += pac.x - element.x;
    }
    if (pac.y < element.y) {
      dist += element.y - pac.y;
    }
    else {
      dist += pac.y - element.y;
    }
    if (dist < high) {
      heigh = dist;
      coor[0] = element.x;
      coor[1] = element.y;
    }
  }
  console.log(coor);
  return coor;
}
