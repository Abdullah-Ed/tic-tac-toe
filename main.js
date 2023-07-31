const printGameLayout = (()=> {
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
  let arrayLength = gameBoard.gameBoardArray.length
  for(let i = 0 ; i < arrayLength; i++){
    const div = document.createElement('div');
    div.textContent = gameBoard.gameBoardArray[i];
    div.classList.add('gameBox')
    container.appendChild(div);
  };
})( printGameLayout.gameBoard);


(function gameEvent(players, gameBoard) {
  const divElements = document.querySelectorAll('.gameBox');
  divElements.forEach((div, index) => {
    div.addEventListener('click', () => {
      if (gameBoard.gameBoardArray[index] === '') {
        if (index % 2 === 0) {
          div.textContent = players[0].symbol;
          gameBoard.gameBoardArray[index] = players[0].symbol;
        } else {
          div.textContent = players[1].symbol; // Change to players[1].symbol
          gameBoard.gameBoardArray[index] = players[1].symbol; // Change to players[1].symbol
        }
      }
    });
  });
})(createPlayers.players, printGameLayout.gameBoard);