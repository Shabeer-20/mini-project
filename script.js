const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
let score = 0;
let speed = 1000;

function moveBox() {
  const area = document.getElementById("game-area");
  const maxX = area.clientWidth - box.clientWidth;
  const maxY = area.clientHeight - box.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  speed = Math.max(300, speed - 50); // Increase difficulty
});

function startGame() {
  setInterval(moveBox, speed);
}

startGame();
