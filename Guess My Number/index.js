const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const msg = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highScoreValue = 0;

console.log("Random Number: ", randomNumber);

const checkNumber = () => {
    const guessValue = Number(guess.value);

    if(!guess.value){
        msg.textContent = 'No number!';
    } else if (guessValue === randomNumber) {
        msg.textContent = 'Correct number!';
        number.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        number.style.width = '30rem';

        if (scores > highScoreValue) {
            highScoreValue = scores;
            highscore.textContent = highScoreValue;
        }
    } else if (guessValue !== randomNumber) {
        if (scores > 1) {
            msg.textContent = guessValue > randomNumber ? 'Too high!' : 'Too low!';
            scores--;
            score.textContent = scores;
        } else {
            msg.textContent = 'You lost the game!';
            score.textContent = 0;
        }
    }
};

check.addEventListener('click', checkNumber);

const resetGame = () => {
    scores = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("New Random Number: ", randomNumber);

    msg.textContent = 'Start guessing...';
    score.textContent = scores;
    number.textContent = '?';
    guess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    number.style.width = '15rem';
};

again.addEventListener('click', resetGame);