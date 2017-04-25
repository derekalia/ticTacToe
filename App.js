const prompt = require('prompt');

// show board
function showBoard() {
  console.log(
`${positions[1]}|${positions[2]}|${positions[3]}\n` +
'_____\n' +
`${positions[4]}|${positions[5]}|${positions[6]}\n` +
'_____\n' +
`${positions[7]}|${positions[8]}|${positions[9]}\n`);
}


// create and array where the peices would do
var positions = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

// change the inputed position
function setValue(num) {
  if (num > 0 && num <= 9) {
    if (positions[num] === ' ') {
      positions[num] = 'X';
      return 'Added';
    }
  } else {
    return 'Bad Value';
  }
}

// prompt the user on which box they would add an element
function askPlayer() {
  console.log('Choose a location');
  prompt.start();
  prompt.get(['location'], (err, result) => {
    console.log(`you typed ${result.location}`);
    setValue(result.location);
    showBoard();
    askPlayer();
  });
}

showBoard();
askPlayer();
