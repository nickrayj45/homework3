// Create variables that will be used

var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "-", "_"];

var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// characters[(i = 3)];
var letter;
var getNumber;
var getElement;
var smallLetter;
var getSymbol;

function makeLetter() {
  letter = Math.floor(Math.random() * (25 - 0) + 0);
  console.log(letter);
  console.log(upper[letter]);
  // return letter;
}

// makeLetter();

function makeNumber() {
  getNumber = Math.floor(Math.random() * (9 - 0) + 0);
  console.log(getNumber);
  console.log(number[getNumber]);

  // return getNumber;
}
//Next steps - 1) Turn console log #18 and #27 (save the values instead of running to the values)

// makeNumber();

function chooseElement() {
  getElement = Math.floor(Math.random() * (32 - 2) + 0);
  // console.log(getElement);
  console.log(getElement);
  // return getElement;
}

function makeSmallLetter() {
  smallLetter = Math.floor(Math.random() * (25 - 0) + 0);
  console.log(smallLetter);
  console.log(lower[smallLetter]);
}

function makeSymbol() {
  smallLetter = Math.floor(Math.random() * (25 - 0) + 0);
  console.log(getSymbol);
  console.log(symbols[getSymbol]);
}

chooseElement();

for (var i = 0; i < getElement; i++) {
  makeLetter();
  makeNumber();
  makeSmallLetter();
  makeSymbol();
}

//Create the array

var string_password = ["upper", "number", "symbols", "lower"];

// Array Push
string_password.push();

// Create the prototype to push

// Create an array that will push the values from lines 17 and 26 to the end of an array
// once we have the 4 requirements,i need to join the arrays together. That joined array will be the password.
// Turn array into a string
