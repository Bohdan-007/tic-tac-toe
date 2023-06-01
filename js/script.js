const cells = document.getElementsByClassName('cell');
const winWrapper = document.getElementById('win-wrapper');
const restartBtn = document.getElementById('restart-btn');
const winText = document.getElementById('win-text');

function checkWinner(symbol) {
  const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  return combinations.some(combination => combination.every(index => cells[index].innerText === symbol));
};

function checkDraw(arr) {
  const bolleans = [];

  for (const el of arr) {
    if (el.innerText !== '') bolleans.push(true);
    else bolleans.push(false);
  };

  return !bolleans.includes(false);
};


let isCross = true;

for (const cell of cells) {
  cell.addEventListener('click', (event) => {
    const symbol = isCross ? 'X' : 'O';
    const symbolBgc = isCross ? '#dc685a' : '#ecaf4f';
    const playerWin = isCross ? `Player 1 is win!` : `Player 2 is win!`;


    if (cell.innerText === '') {
      event.target.innerText = symbol;
      event.target.style.backgroundColor = symbolBgc;
      isCross = !isCross;
    };


    if (checkWinner(symbol)) {
      winWrapper.classList.remove('hide');
      winText.innerText = playerWin;
    }
    else if (checkDraw(cells)) {
      winWrapper.classList.remove('hide');
      winText.innerText = 'Is draw!';
    };

    // click on restart button
    restartBtn.addEventListener('click', () => {
      winWrapper.classList.add('hide');
      isCross = true;

      for (const cell of cells) {
        cell.innerText = '';
        cell.style.backgroundColor = '#78bec5';
      };
    });

  });
};