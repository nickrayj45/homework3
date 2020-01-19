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

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

var pswdstring = "";

// Create universal variables

var letter;
var getNumber;
var getElement;
var smallLetter;
var getSymbol;

// Create functions

// Function for randomly pulling an uppercase letter
function makeLetter() {
  var randoindex = Math.floor(Math.random() * (25 - 0) + 0);
  letter = upper[randoindex];
  console.log(letter);
  console.log(upper[letter]);
  // return letter;
}

// Function for randomly pulling a random number from 0-9
function makeNumber() {
  var numbers = Math.floor(Math.random() * (9 - 0) + 0);
  getNumber = number[numbers];
  console.log(getNumber);
  console.log(number[getNumber]);
}

// Function for randomly pulling a lowercase letter
function makeSmallLetter() {
  var small = Math.floor(Math.random() * (25 - 0) + 0);
  smallLetter = lower[small];
  console.log(smallLetter);
  console.log(lower[smallLetter]);
}

// Function for randomly pulling symbol
function makeSymbol() {
  var chars = Math.floor(Math.random() * (10 - 0) + 0);
  getSymbol = symbols[chars];
  console.log(getSymbol);
  console.log(symbols[getSymbol]);
}

// Function for randomly pulling a mix of the variable between 8 and 128
function chooseElement() {
  getElement = Math.floor(Math.random() * (32 - 2) + 0);
  console.log(getElement);
  console.log(getElement);
  // return getElement;
}

chooseElement();

// Create password for loop with the functions created above
for (var i = 0; i < getElement; i++) {
  makeLetter();
  makeNumber();
  makeSmallLetter();
  makeSymbol();
  pswdstring += letter;
  pswdstring += getNumber;
  pswdstring += smallLetter;
  pswdstring += getSymbol;
}

document.getElementById("createBtn").addEventListener("click", function() {
  alert(pswdstring);
});
//Create the array

console.log("THE LETTER IS:" + pswdstring);

// Create copy to clipboard function
function copyToClickboard() {
  var copyText = document.getElementById("pswdstring");
  document.execCommand("copyToClipboard");
  alert("Copied the text: " + copyText.value);
}
