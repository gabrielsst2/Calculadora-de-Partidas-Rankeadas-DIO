function gamesCalculator(wins, losses) {
    return wins - losses;
}

function defineLevel(resultCalculator) {
    if (resultCalculator <= 10) {
      return 'Ferro';
    }
    else if (resultCalculator <= 20) {
      return 'Bronze';
    }
    else if (resultCalculator <= 50) {
      return 'Prata';
    }
    else if (resultCalculator <= 80) {
      return 'Ouro';
    }
    else if (resultCalculator <= 90) {
      return 'Diamante';
    }
    else if (resultCalculator <= 100) {
      return 'Lendário';
    }
    else {
      return 'Imortal';
    }
}

const prompt = require('prompt-sync')();

const wins = prompt('Quantas vitórias você tem? ');
const losses = prompt('Quantas derrotas você tem? ');

const resultCalculator = gamesCalculator(wins, losses);
const level = defineLevel(resultCalculator);

console.log(`O Herói tem de saldo de ${resultCalculator} está no nível de ${level}`);