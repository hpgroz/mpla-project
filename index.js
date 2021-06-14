const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById("game-board").style.display = "none";
document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "block"; //why blocking...  
startGame();
}

let currentGame;
function startGame() {
  //Instantiate new game
  currentGame = new Game();

  //Instantiate new players
  let currentPR = new PR();


  //Assign my new players to my new game
  currentGame.PR = currentPR;
  currentGame.PR.draw();


  // cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
}

function updateCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  currentGame.PR.draw();
  requestAnimationFrame(updateCanvas);
}

  //Car move event listener
  document.addEventListener("keydown", (e) => {
    currentGame.PR.movePR(e.key);
  });

