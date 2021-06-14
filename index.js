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


  cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
}


function detectCollision(obstacle) {
  return !(currentGame.PR.x > obstacle.x + obstacle.width ||
    currentGame.PR.x + currentGame.PR.width < obstacle.x ||
    currentGame.PR.y > obstacle.y + obstacle.height
  );
}

function updateCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  currentGame.PR.draw();
  currentGame.obstaclesFrequency++;
  if (currentGame.obstaclesFrequency % 120 === 1) {//Pace of the obstacles
    const randomObstacleX = Math.floor(Math.random() * 1200);
    const randomObastacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;

    const newObstacle = new Obstacle(
      randomObstacleX,
      randomObastacleY,
      50,
      50
    );

    currentGame.obstacles.push(newObstacle);

  }


  currentGame.obstacles.forEach((obstacle, index) => {
    obstacle.y += 1;
    obstacle.draw();


    //TODO: Check Collision
    if (detectCollision(obstacle)){
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById('score').innerHTML = 0;
      document.getElementById("game-board").requestFullscreen.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      alert('BOOOOMMMMMM! GAME OVER!!!');

    }

    if (obstacle.y > canvas.height){
      currentGame.score++;
      document.getElementById('score').innerHTML = currentGame.score;
      currentGame.obstacles.splice(index, 1);
    }
  });

  //Coins
  currentGame.coinsFrequency++;
  
  if (currentGame.coinsFrequency % 100 === 1) {
    const randomCoinsX = Math.floor(Math.random() * 1100);
    const randomCoinsY = 0;
    const randomCoinsWidth = Math.floor(Math.random() * 50) + 20;
    const randomCoinsHeight = Math.floor(Math.random() * 50) + 20;
    
    
    const newCoin = new Coin(
      randomCoinsX,
      randomCoinsY,
      50,
      50
      );
      
      currentGame.coins.push(newCoin);
      console.log(currentGame.coins)
    }
    
    
    currentGame.coins.forEach((coin, index) =>{
      coin.y += 1;
      coin.draw();
      
    })

    if (!currentGame.gameOver) {
      currentGame.animationId = requestAnimationFrame(updateCanvas);
    }
  };
      
      //Car move event listener
  document.addEventListener("keydown", (e) => {
    currentGame.PR.movePR(e.key);
  });

