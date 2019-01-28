function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}



function Bird (brain) {
  this.x = 150;
  this.y = height / 2;
  this.diameter = 25;
  this.lift = -40;
  this.velocity = 0;
  this.score = 0;
  this.cancount = true;
  this.dis  = 0;
  if (brain) {
    this.brain = brain.copy();
    this.brain.mutate(mutate);
  }
  else {
    this.brain = new NeuralNetwork(5, 8, 1);
  }

  this.fitness = 0;

  this.think = function(col1, col2) {


    let inputs = [];
    inputs[0] = this.y / height;
    if (col1.x < col2.x && col1.x > this.x) {
      inputs[1] = col1.h1 / height;
      inputs[2] = col1.y2 / height;
      inputs[3] = col1.x / width;
      inputs[4] = this.velocity / 10;
    }
    else {
      inputs[1] = col2.h1 / height;
      inputs[2] = col2.y2 / height;
      inputs[3] = col2.x / width;
      inputs[4] = this.velocity / 20;
    }


    let output = this.brain.predict(inputs);
    if (output[0] > 0.5) {
      this.goUp();
    }
  }

  this.update = function () {
    this.dis += 1;
    if (this.velocity < 5) {
      this.velocity +=5;
    }

    this.y += this.velocity;

  }

  this.reset = function(col1, col2, birds,ind) {
    if (ind == TOTAL +1) {
      col1.x = width + col1.w;
      col2.x = width + width /2 +  2 * col2.w;
      col1.h1 = random(50,300) ;
      col1.h2 = height - col1.h1 - col1.spalt;
      col2.h1 = random(50,300) ;
      col2.h2 = height - col2.h1 - col1.spalt;
      col1.y1 = 0;
      col1.y2 = height - col1.h2;
      col2.y1 = 0;
      col2.y2 = height - col2.h2;
      this.y = height / 2;
      this.score = 0;
      show = false;

    }
    else if (birds.length == 1) {
      col1.x = width + col1.w;
      col2.x = width + width /2 +  2 * col2.w;
      col1.h1 = random(50,300) ;
      col1.h2 = height - col1.h1 - col1.spalt;
      col2.h1 = random(50,300) ;
      col2.h2 = height - col2.h1 - col1.spalt;
      col1.y1 = 0;
      col1.y2 = height - col1.h2;
      col2.y1 = 0;
      col2.y2 = height - col2.h2;
      this.y = height / 2;
      if (birds[ind].dis > bestBird.dis) {
        bestBird.brain = birds[ind].brain;
      }
      savedBirds.push(birds[ind]);
      nextGeneration();
      this.score = 0;

      //gamestart = false;
    }
    else {
      savedBirds.push(birds.splice(ind ,1)[0]);
    }
  }

  this.edges = function (col1,col2, birds, ind) {
    if (this.y - this.diameter < 0) {
      this.y = 0 + this.diameter;
    }
    if (this.y + this.diameter > height) {
      this.reset(col1, col2, birds, ind);
    }
  }

  this.scorecalc = function(col1,col2) {
    if(this.x - this.diameter > col1.x + col1.w && this.cancount == true || this.x - this.diameter > col2.x + col2.w && this.cancount == true) {
      this.score += 1;
      this.cancount = false;
    }
    if(this.x < col1.x && this.x < col2.x) {
      this.cancount = true;
    }
  }

  this.goUp = function() {
    this.velocity += this.lift;

  }
  this.collision = function (col1, col2, birds, ind) {
    if (this.y > 0 && this.y - this.diameter < col1.h1 && this.x + this.diameter > col1.x && this.x < col1.x + col1.w) {
      this.reset(col1, col2, birds, ind);
    }
    if (this.y < height && this.y + this.diameter > col1.y2 && this.x + this.diameter> col1.x && this.x - this.diameter < col1.x + col1.w) {
      this.reset(col1, col2, birds, ind);
    }
    if (this.y > 0 && this.y - this.diameter < col2.h1 && this.x + this.diameter > col2.x && this.x < col2.x + col2.w) {
      this.reset(col1, col2, birds, ind);
    }
    if (this.y < height && this.y + this.diameter > col2.y2 && this.x + this.diameter > col2.x && this.x - this.diameter < col2.x + col2.w) {
      this.reset(col1, col2, birds, ind);
    }
  }
  this.display = function () {
    fill(255, 246, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(255);
    text(this.score, 50, 50);
  }
}
