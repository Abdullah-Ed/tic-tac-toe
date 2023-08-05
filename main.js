const printGameLayout = (() => {
  let gameBoard = {
    gameBoardArray: ['', '', '', '', '', '', '', '', ''],
  };
  return { gameBoard };
})();


 const getPlayersName = (()=> {
   const form = document.querySelector('form')
   const submitBtn = document.querySelector('.submit-btn')
   submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const playerOneName =  document.querySelector('#first-player').value
    const playerTwoName = document.querySelector('#second-player').value
    const playerOne = createPlayers.createPlayer(playerOneName,'X');
    const playerTwo = createPlayers.createPlayer(playerTwoName,'O')
    form.reset()
    form.style.display= 'none'
    restBtn.style.transform = 'scale(1)';
    container.style.transform = 'scale(1)';
   })
 })() 



const createPlayers = (() => {
const players = [];

  const createPlayer = (name, symbol )=>{
    const player  = {name, symbol};
    players.push(player);
    return player;
  };
  return { createPlayer, players}
})();


const container = document.querySelector('.container');

(function render(gameBoard) {
  let arrayLength = gameBoard.gameBoardArray.length;
  for (let i = 0; i < arrayLength; i++) {
    const div = document.createElement('div');
    div.textContent = gameBoard.gameBoardArray[i];
    div.classList.add('gameBox');
    container.appendChild(div);
  }
})(printGameLayout.gameBoard);

const divElements = document.querySelectorAll('.gameBox');

(function gameEvent(players, gameBoard) {
  divElements.forEach((div, index) => {
    div.addEventListener('click', () => {
      if (!gameResult == ''){
        return;
      }

      let X = 0;
      let O = 0;
      for (let i = 0; i < gameBoard.gameBoardArray.length; i++) {
        if (gameBoard.gameBoardArray[i] == 'X') {
          X++;
        } else if (gameBoard.gameBoardArray[i] == 'O') {
          O++;
        }
      }

      if (gameBoard.gameBoardArray[index] === '') {
        if (X <= O) {
          div.textContent = players[0].symbol;
          gameBoard.gameBoardArray[index] = players[0].symbol;
        } else {
          div.textContent = players[1].symbol;
          gameBoard.gameBoardArray[index] = players[1].symbol;
        }
      }
 
      checkGame(gameBoard,resultDisplay); 
    });
  });
})(createPlayers.players, printGameLayout.gameBoard);

let gameResult = '';
function checkGame(gameBoard,resultDisplay) {
  
  let gameBoardArray = gameBoard.gameBoardArray;
  if ((gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X')||
      (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X')||
      (gameBoardArray[6] === 'X' && gameBoardArray[7] === 'X' && gameBoardArray[8] === 'X')||
      
      (gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X')||
      (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X')||
      (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X')||
      
      (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X')||
      (gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X')) {
      resultDisplay.textContent = `${createPlayers.players[0].name} Won the game`;
      resultDisplay.style.transform = 'scale(1)'
      gameResult = 'X won ';
  } else if(
      (gameBoardArray[0] === 'O' && gameBoardArray[1] === 'O' && gameBoardArray[2] === 'O')||
      (gameBoardArray[3] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[5] === 'O')||
      (gameBoardArray[6] === 'O' && gameBoardArray[7] === 'O' && gameBoardArray[8] === 'O')||
      
      (gameBoardArray[0] === 'O' && gameBoardArray[3] === 'O' && gameBoardArray[6] === 'O')||
      (gameBoardArray[1] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[7] === 'O')||
      (gameBoardArray[2] === 'O' && gameBoardArray[5] === 'O' && gameBoardArray[8] === 'O')||
      
      (gameBoardArray[2] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[6] === 'O')||
      (gameBoardArray[0] === 'O' && gameBoardArray[4] === 'O' && gameBoardArray[8] === 'O')) {
        resultDisplay.textContent = `${createPlayers.players[1].name} Won the game`;
        resultDisplay.style.transform = 'scale(1)'
      gameResult = 'O won ';
  } else if (!gameBoardArray.includes('')){
    resultDisplay.textContent = `Tie`;
    resultDisplay.style.transform = 'scale(1)'
    gameResult = 'no one  won ';
  }
  
}

const restBtn = document.querySelector('.restart-btn');
const restGameResult = (function restGame(gameBoard){
  const resultDisplay = document.querySelector('.game-result-display');
  
  restBtn.addEventListener('click', ()=>{
    gameBoard.gameBoardArray = ['', '', '', '', '', '', '', '', ''];
    resultDisplay.style.transform = 'scale(0)'
    resultDisplay.style.transition = '0.3'
    resultDisplay.textContent = ''
    gameResult = ''
    divElements.forEach((div)=>{
      div.textContent = ''
    })
  })
  return{getResultDisplay: () => resultDisplay,}
})(printGameLayout.gameBoard);

const resultDisplay = restGameResult.getResultDisplay();