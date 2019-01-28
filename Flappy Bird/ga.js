
function nextGeneration () {
  gen.gen += 1;
  calculateFitness();
  
  for (let i = 0; i < TOTAL; i++) {
    let child = new Bird(savedBirds[TOTAL - 1].brain);
    birds[i] = child;

  }


  savedBirds = [];
}

function pickOne() {
  var index = 0;
  var r = random(1);

  while(r > 0) {
    r = r- savedBirds[index].fitness;
    index++;
  }
  index--;
  let child = new Bird(savedBirds[index].brain);
  child.mutatee();
  return child;
}

function calculateFitness() {
  let high = 0;
  for (let bird of savedBirds) {
    if (bird.dis > high) {
      high = bird.dis;
    }
  }

  for (let bird of savedBirds) {
    bird.fitness = bird.dis / high;
  }
}

function genanzeige () {
  this.gen = 0;

  this.display = function() {
    fill(255);
    text(this.gen, 50, 100);
  }
}
