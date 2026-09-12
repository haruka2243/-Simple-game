let score = 0;
let time = 30;
let timer;
let playing = false;

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startButton = document.getElementById("startButton");
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");

startButton.addEventListener("click", startGame);

target.addEventListener("click", function() {
    if (!playing) return;

    score++;
    scoreText.textContent = score;

    moveTarget();
});

function startGame() {

    score = 0;
    time = 30;
    playing = true;

    scoreText.textContent = score;
    timeText.textContent = time;

    startButton.disabled = true;
    target.style.display = "block";

    moveTarget();

    timer = setInterval(function() {

        time--;
        timeText.textContent = time;

        if (time <= 0) {
            endGame();
        }

    }, 1000);
}

function moveTarget() {

    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

function endGame() {

    clearInterval(timer);

    playing = false;

    target.style.display = "none";
    startButton.disabled = false;

    alert("ゲーム終了！\nスコア：" + score);
}
