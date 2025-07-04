let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(random);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === random) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = random;
        document.body.style.backgroundColor = "green";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== random) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > random ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = "";
            document.querySelector('.guess').style.backgroundColor = '#222';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
});