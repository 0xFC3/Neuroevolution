
function nextGeneration () {
  genAn.gen += 1;
  calculateFitness();
  let high = 0;
  console.log(savedPacs);
  for (let i = 0; i < TOTAL; i++) {
    if (savedPacs[i].score > high) {
      high = savedPacs[i].score;
      bestPac = savedPacs[i];
      console.log(bestPac);
    }

  }


  savedPacs = [];
}

function calculateFitness() {
  let high = 0;
  for (let pac of savedPacs) {
    if (pac.score > high) {
      high = pac.score;
    }
  }

  for (let pac of savedPacs) {
    pac.fitness = pac.score / high;
  }
}

function genanzeige () {
  this.gen = 0;

  this.display = function() {
    fill(255);
    text(this.gen, 20, 100);
  }
}
