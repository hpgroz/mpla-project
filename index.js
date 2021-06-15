const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById("game-board").style.display = "none"; //non showing image

document.getElementById("start-button").onclick = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game-board").style.display = "block"; //blocking image..  
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
    currentGame.PR.y > obstacle.y + obstacle.height ||
    currentGame.PR.y + obstacle.height < obstacle.y
  );
}
function increaseScoreCoin(coin) {
  return !(currentGame.PR.x > coin.x + coin.width ||
    currentGame.PR.x + currentGame.PR.width < coin.x ||
    currentGame.PR.y > coin.y + coin.height ||
    currentGame.PR.y + coin.height < coin.y
  );
}
function increaseScoreDiamond(diamond) {
  return !(currentGame.PR.x > diamond.x + diamond.width ||
    currentGame.PR.x + currentGame.PR.width < diamond.x ||
    currentGame.PR.y > diamond.y + diamond.height ||
    currentGame.PR.y + diamond.height < diamond.y
  );
}
function increaseScoreOil(oil) {
  return !(currentGame.PR.x > oil.x + oil.width ||
    currentGame.PR.x + currentGame.PR.width < oil.x ||
    currentGame.PR.y > oil.y + oil.height ||
    currentGame.PR.y + oil.height < oil.y
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


    //obstacle Collision
    if (detectCollision(obstacle)) {
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById('score').innerHTML = 0;
      document.getElementById("game-board").requestFullscreen.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      alert('BOOOOMMMMMM! GAME OVER!!!');
    };

    /* if (obstacle.y > canvas.height) {
      currentGame.score++;
      document.getElementById('score').innerHTML = currentGame.score;
      currentGame.obstacles.splice(index, 1);
    } */
  })










  //Coins
  currentGame.coinsFrequency++;

  if (currentGame.coinsFrequency % 200 === 1) {
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
  }


  currentGame.coins.forEach((coin, index) => {
    coin.y += 1;
    coin.draw();


    //coin increase score
    if (increaseScoreCoin(coin)) {

      currentGame.score++;

      document.getElementById('score').innerHTML = currentGame.score;
      document.getElementById("game-board").requestFullscreen.display = "none";
      currentGame.coins.splice(index, 1);
    }
    //scores after collision to be changed

    /* if (coin.y > canvas.height) {
      currentGame.score++;
      document.getElementById('score').innerHTML = currentGame.score;
      currentGame.coins.splice(index, 1);
    } */
  })


  //Diamonds
  currentGame.diamondsFrequency++;
  if (currentGame.diamondsFrequency % 1000 === 1) {
    const randomDiamondsX = Math.floor(Math.random() * 1100);
    const randomDiamondsY = 0;
    const randomDiamondsWidth = Math.floor(Math.random() * 50) + 20;
    const randomDiamondsHeight = Math.floor(Math.random() * 50) + 20;
    const newDiamond = new Diamond(
      randomDiamondsX,
      randomDiamondsY,
      50,
      50
    );
    currentGame.diamonds.push(newDiamond);
  }
  currentGame.diamonds.forEach((diamond, index) => {
    diamond.y += 1;
    diamond.draw();
    
    
    //increasing score diamonds
    if (increaseScoreDiamond(diamond)) {
      
      currentGame.score+=5;
      
      document.getElementById('score').innerHTML = currentGame.score;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.diamonds.splice(index, 1);
    }
  });

  //Oil
  currentGame.oilsFrequency++;
  if (currentGame.oilsFrequency % 600 === 1) {
    const randomOilsX = Math.floor(Math.random() * 1100);
    const randomOilsY = 0;
    const randomOilsWidth = Math.floor(Math.random() * 50) + 20;
    const randomOilsHeight = Math.floor(Math.random() * 50) + 20;
    const newOil = new Oil(
      randomOilsX,
      randomOilsY,
      50,
      50
    );
    currentGame.oils.push(newOil);
  }
  currentGame.oils.forEach((oil, index) => {
    oil.y += 1;
    oil.draw();

    //increasing score oil
    if (increaseScoreOil(oil)) {
      
      currentGame.score+=10;
      
      document.getElementById('score').innerHTML = currentGame.score;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.oils.splice(index, 1);
    }
  });

  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
};



//Car move event listener
document.addEventListener("keydown", (e) => {
  currentGame.PR.movePR(e.key);
});

