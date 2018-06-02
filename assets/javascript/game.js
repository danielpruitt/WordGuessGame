
//List of options for the guesses
var wordbank = ["luke","leia","chewbacca","han","vader","anakin", "kenobi", "yoda", "lando", "palpatine",  "maul", "r2d2", "c3p0"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessedAnswers = []
var answer = "_"
var guesses= []
//variables needed 
var lives;
var guessCount;
var result;
var word;
var letterGuess
var hidden  // word is hidden and replaced with undersore
  

//doc get element
var showLives = document.getElementById("showLives");
var guess = document.getElementById("#guess");

//keys being pressed
document.getElementById("guess");
document.onkeyup = function (typed) {         //event is function of key hit for guessing word
  userGuess.textContent = event.key;
  // guessAnswers(event.key);
};

//randomize computer choices needs to be hidden//

randomWord = wordbank[Math.floor(wordbank.length * Math.random())];
console.log(randomWord);
// document.getElementById("userGuess").textContent= randomWord;
// document.getElementById("userGuess").textContent= answer;
answer.Array = [];
  for(i=0; i< randomWord.length; i++){
    answer +="_ "
  }

  document.getElementById("userGuess").innerHTML=answer;


//making guess and logging them
console.log(alpha);
  

  
  
  

  