const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById("game-board").style.display = "none"; //non showing image
document.querySelector(".gameover").style.display = "none";

  document.getElementById("logo-img").onclick = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game-board").style.display = "block"; //blocking image..  
  startGame();

}
//Turn this into after gameover screen to make it show the final score
/* document.getElementById("logo-img").onclick = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game-board").style.display = "block"; //blocking image..  
  startGame();
} */
//Make the map move around

/* let mapOfAngola = new Image;
mapOfAngola.src = "./images/angola-mapa.png";
mapOfAngola.onload = function () {
  context.drawImage(mapOfAngola, 100, 100, 600, 268);
}

function draw3(x) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(mapOfAngola, x, 30, 600, 268);
  x += 3;
  if (x < (canvas.width - 400)) {
    setTimeout(() => {
      draw3(x); //-> Recursive function
    }, 30);
  } else {
    draw4(x); //-> Recursive function
  }

}

function draw4(x) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(mapOfAngola, x, 30, 100, 100);
  x -= 3;
  if (x > 0) {
    setTimeout(() => {
      draw4(x); //-> Recursive function
    }, 30);
  } else {
    draw3(x); //-> Recursive function
  }
  draw3(0);
}
 */


let currentGame;
function startGame() {
  //Instantiate new game
  currentGame = new Game();
  //Instantiate new players
  let currentPR = new PR(1000, "./images/happy_tree_friends/player1happy.png");
  let currentPR2 = new PR(200, "./images/happy_tree_friends/player2happy.png");
  //Assign my new players to my new game
  currentGame.PR = currentPR;
  currentGame.PR.draw();
  currentGame.PR2 = currentPR2;
  currentGame.PR2.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
  starGame.play();
}

//Detect collision player1
/* function detectCollision(obstacle) {
  return !(currentGame.PR.x > obstacle.x + obstacle.width ||
    currentGame.PR.x + currentGame.PR.width < obstacle.x ||
    currentGame.PR.y > obstacle.y + obstacle.height ||
    currentGame.PR.y + obstacle.height < obstacle.y
  );
} */


/* function detectCollision(obstacle) {
  return !(currentGame.PR.x  || currentGame.PR2.x > obstacle.x + obstacle.width ||
    (currentGame.PR.x + currentGame.PR.width)  || (currentGame.PR2.x + currentGame.PR2.width)  < obstacle.x ||
    currentGame.PR.y  || currentGame.PR2.y  > obstacle.y + obstacle.height ||
    (currentGame.PR.y + obstacle.height) || (currentGame.PR2.y + obstacle.height) < obstacle.y);
}
function increaseScoreCoin(coin) {
  return !(currentGame.PR.x && currentGame.PR2.x > coin.x + coin.width ||
    (currentGame.PR.x + currentGame.PR.width) && (currentGame.PR2.x + currentGame.PR2.width) < coin.x ||
    currentGame.PR.y && currentGame.PR2.y > coin.y + coin.height ||
    (currentGame.PR.y + coin.height) && (currentGame.PR2.y + coin.height) < coin.y
  );
} */
function detectCollision(obstacle) {
  return !(currentGame.PR.x > (obstacle.x-25) + obstacle.width ||
    currentGame.PR.x + currentGame.PR.width < (obstacle.x+20) ||
    currentGame.PR.y > (obstacle.y-25) + obstacle.height ||
    currentGame.PR.y + obstacle.height < (obstacle.y+30)
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


//Detect collision player2

function detectCollision2(obstacle) {
  return !(currentGame.PR2.x > (obstacle.x-25) + obstacle.width ||
    currentGame.PR2.x + currentGame.PR2.width < (obstacle.x+20) ||
    currentGame.PR2.y > (obstacle.y-25) + obstacle.height ||
    currentGame.PR2.y + obstacle.height < (obstacle.y+30)
  );
}
function increaseScoreCoin2(coin) {
  return !(currentGame.PR2.x > coin.x + coin.width ||
    currentGame.PR2.x + currentGame.PR2.width < coin.x ||
    currentGame.PR2.y > coin.y + coin.height ||
    currentGame.PR2.y + coin.height < coin.y
  );
}
function increaseScoreDiamond2(diamond) {
  return !(currentGame.PR2.x > diamond.x + diamond.width ||
    currentGame.PR2.x + currentGame.PR2.width < diamond.x ||
    currentGame.PR2.y > diamond.y + diamond.height ||
    currentGame.PR2.y + diamond.height < diamond.y
  );
}
function increaseScoreOil2(oil) {
  return !(currentGame.PR2.x > oil.x + oil.width ||
    currentGame.PR2.x + currentGame.PR2.width < oil.x ||
    currentGame.PR2.y > oil.y + oil.height ||
    currentGame.PR2.y + oil.height < oil.y
  );
}

function updateCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  currentGame.PR.draw();
  currentGame.PR2.draw();
  currentGame.obstaclesFrequency++;
  if (currentGame.obstaclesFrequency % 120 === 1) {//Pace of the obstacles
    const randomObstacleX = Math.floor(Math.random() * 1200);
    const randomObastacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;

    const newObstacle = new Obstacle(
      randomObstacleX,
      randomObastacleY,
      75,
      75
    );

    currentGame.obstacles.push(newObstacle);

  }


    currentGame.obstacles.forEach((obstacle, index) => {
    obstacle.y += 1;
    obstacle.draw();


    //obstacle Collision player 1
    if (detectCollision(obstacle)) {
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score1 = 0;
      currentGame.obstacles = [];
      document.getElementById('score1').innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      starGame.pause();
      dohSound.play();
      alert('Oh no, Nutty ate an empty plastic wrap and chocked to death!!')  

      document.getElementById("game-board").style.display = "none";
      document.querySelector(".gameover").style.display = "block";
      gameOverSound.play();
    };

    //obstacle collision player 2
    if (detectCollision2(obstacle)) {
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score2 = 0;
      currentGame.obstacles = [];
      document.getElementById('score2').innerHTML = 0;
      document.getElementById("game-board").requestFullscreen.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      starGame.pause();
      dohSound.play();
      alert('Oh no, Flippy ate an empty plastic wrap and chocked to death!!');
      
      document.getElementById("game-board").style.display = "none";
      document.querySelector(".gameover").style.display = "block";
      gameOverSound.play();
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
      50,
    );

    currentGame.coins.push(newCoin);
  }


  currentGame.coins.forEach((coin, index) => {
    coin.y += 1;
    coin.draw();


    //coin increase score for player 1
    if (increaseScoreCoin(coin)) {

      currentGame.score1++;

      document.getElementById('score1').innerHTML = currentGame.score1;
      document.getElementById("game-board").requestFullscreen.display = "none";

      currentGame.coins.splice(index, 1);
      eatSound.play();
    }
    //coin increase score for player 2
    if (increaseScoreCoin2(coin)) {

      currentGame.score2++;

      document.getElementById('score2').innerHTML = currentGame.score2;
      document.getElementById("game-board").requestFullscreen.display = "none";
      currentGame.coins.splice(index, 1);
      eatSound.play();
    }

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


    //increasing score diamonds for player 1
    if (increaseScoreDiamond(diamond)) {

      currentGame.score1 += 5;

      document.getElementById('score1').innerHTML = currentGame.score1;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.diamonds.splice(index, 1);
      eatSound.play();
    }
    //increasing score diamonds for player 2

    if (increaseScoreDiamond2(diamond)) {

      currentGame.score2 += 5;

      document.getElementById('score2').innerHTML = currentGame.score2;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.diamonds.splice(index, 1);
      eatSound.play();
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

      currentGame.score1 += 10;

      document.getElementById('score1').innerHTML = currentGame.score1;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.oils.splice(index, 1);
      eatSound.play();
    }
    //increse oil points for player 2
    if (increaseScoreOil2(oil)) {

      currentGame.score2 += 10;

      document.getElementById('score2').innerHTML = currentGame.score2;
      document.getElementById("game-board").requestFullscreen.display = "none";
      // cancelAnimationFrame(currentGame.animationId); //why animation
      currentGame.oils.splice(index, 1);
      eatSound.play();
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

document.addEventListener("keydown", (e) => {
  currentGame.PR2.movePR2(e.key);

});


