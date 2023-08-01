const printGameLayout = (() => {
  let gameBoard = {
    gameBoardArray: ['', '', '', '', '', '', '', '', ''],
  };
  return { gameBoard };
})();


const createPlayers = (() => {
  const players = [
    {
      name: 'playerOneName',
      symbol: 'X',
    },
    {
      name: 'playerTwoName',
      symbol: 'O',
    },
  ];
  return { players };
})();

(function render(gameBoard) {
  const container = document.querySelector('.container');
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
 
      checkGame(gameBoard); 
    });
  });
})(createPlayers.players, printGameLayout.gameBoard);

let gameResult = '';
function checkGame(gameBoard) {

  let gameBoardArray = gameBoard.gameBoardArray;
  if ((gameBoardArray[0] === 'X' && gameBoardArray[1] === 'X' && gameBoardArray[2] === 'X')||
      (gameBoardArray[3] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[5] === 'X')||
      (gameBoardArray[6] === 'X' && gameBoardArray[7] === 'X' && gameBoardArray[8] === 'X')||
      
      (gameBoardArray[0] === 'X' && gameBoardArray[3] === 'X' && gameBoardArray[6] === 'X')||
      (gameBoardArray[1] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[7] === 'X')||
      (gameBoardArray[2] === 'X' && gameBoardArray[5] === 'X' && gameBoardArray[8] === 'X')||
      
      (gameBoardArray[2] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[6] === 'X')||
      (gameBoardArray[0] === 'X' && gameBoardArray[4] === 'X' && gameBoardArray[8] === 'X')) {
      console.log('player X Won');
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
      console.log('player O Won');
      gameResult = 'O won ';
  } else if (!gameBoardArray.includes('')){
    console.log('Tie')
    gameResult = 'no one  won ';
  }
}

(function restGame(gameBoard){
  const restBtn = document.querySelector('.restart');
  restBtn.addEventListener('click', ()=>{
    gameBoard.gameBoardArray = ['', '', '', '', '', '', '', '', ''];
    divElements.forEach((div)=>{
      div.textContent = ''
    })
  })
})(printGameLayout.gameBoard);