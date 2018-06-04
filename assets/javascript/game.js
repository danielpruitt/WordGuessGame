//List of arrays
var wordbank = ["luke","leia","chewbacca","han","vader","anakin", "kenobi", "yoda", "lando", "palpatine",  "maul", "r2d2", "c3p0"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var correct = [];
var wrong= [];
var availInput = [];

//Variables
var answer = "_"
var lives;
var guessCount;
var word;
var wins = 0;
var losses = 0;
var allowedGuesses = 10;
var keyStroke;


//document.getElementById
var userGuess = document.getElementById("userGuess");
var underScores = document.getElementById("underScores");
var wrong = document.getElementById("wrong");
var showLives = document.getElementById("showLives");






//keys being pressed
// document.getElementById("userGuess");
  document.onkeyup = function (event) {         
    keyStroke.textContent = event.key;
};


//computer choices 
var randomWord = wordbank[Math.floor(wordbank.length * Math.random())];
console.log(randomWord);

 answerArray = []; 
      for(i=0; i < randomWord.length; i++){
        answerArray +=  "_ ";
      }
var answer = answerArray.toString();
console.log(answer)
console.log(answerArray)
document.getElementById("underScores").innerHTML = answer;


//splice and push to arrays 
function spliceArray() {
  alpha.splice()
}

function pushArray() {

}



