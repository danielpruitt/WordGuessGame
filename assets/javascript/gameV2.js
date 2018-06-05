window.onload = function() {

    //print variable shortcuts
    var userGuess = document.getElementById("user");
    var underScores = document.getElementById("underScores");
    var wrongGuess = document.getElementById("wrong-guesses");
    var livesCounter = document.getElementById("livesCounter");
    var results = document.getElementById("results");
    var winCounter = document.getElementById("win-counter");
    var lossCounter = document.getElementById("loss-counter");
    var img = document.getElementById("image");

    //Arrays
    
    var guessed = [];
    var correct = [];    
    var availInput = [];
    var wordBank = [];
    var userWords = [];
    var userGuesses = [];
    var wrongGuesses = [];
    var placeHolders = [];
   
    //other vars
    var wins = 0;
    var losses = 0; 
    var allowedGuess = 10;
    var randWord; 
    var lettersGuessed;
    var matchingGuesses;
    var numMatchingGuesses;
    var userGuess; 
    var livesCounter;
    var allowedGuesses = 10;

// buttons to start and reset
    document.getElementById('start-button').addEventListener("click", config);
    document.getElementById('reset-button').addEventListener("click", config);
    

//config function for restart gameplay

    function config() {
        gamePlay()
    }

    livesCounter.textContent = allowedGuesses;
    winCounter.textContent = wins;
    lossCounter.textContent = losses;


//function for the gameplay

    function gamePlay(){
        availInput = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0", " "];
        wordBank = ["luke","leia","chewbacca","hansolo","darthvader","anakin", "obiwankenobi", "yoda", "lando", "darthmaul","r2d2","c3p0", "rey","finn","phasma","poe","kyloren"];
        userGuesses = [];
        wrongGuesses = [];
        placeHolders = [];
    

        //decides if won or lost
        numMatchingGuesses = 0;
        allowedGuesses = 10;  //lives

        //get a random word
        randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        console.log(randWord.length);

        //replace randomWord and add underscores
        for (var i = 0; i < randWord.length; i++) {
            placeHolders.push(" _ ");
            underScores.textContent = placeHolders.join(' ');
            
        }
        
        //user guessing functions
        document.onkeyup = function(event) {
            userGuess = event.key;

            if (availInput.indexOf(userGuess) > -1) {
                userGuesses.push(userGuess);
                availInput.splice(availInput.indexOf(userGuess), 1);

                if(randWord.indexOf(userGuess) > -1){  //maybe take this out later if it is DRY, leave for loop
                    for (var i = 0; i < randWord.length; i++) {

                        if ( randWord[i] === userGuess) {
                            placeHolders[i] = userGuess;
                            underScores.textContent = placeHolders.join(' ');
                            numMatchingGuesses++;
                            console.log(numMatchingGuesses);
                        }
                    }

                }
                else {   //if change DRY code should be else if 
                    wrongGuesses.push(userGuess);
                    wrongGuess.textContent = wrongGuesses.join(' ');
                    allowedGuesses--;
                    livesCounter.textContent = allowedGuesses;
                }



            }    //end of if for not using same key twice
            
            else {
                alert(" That's not a valid guess, or you may have used that letter previously.");
            }
            
            if (numMatchingGuesses === randWord.length) {
                roundWin();
                console.log(numMatchingGuesses)
                
            }
            else if (allowedGuesses === 0) {
                roundLoss();
                alert("You Lost!")
                
            }
        } 

        
    } //end of gameplay function

    function roundWin() {
        availInput = [];
        wins++;
        console.log(wins);
        winCounter.textContent = wins;
        switch (randWord){
            case("luke") :
                img.src = "assets/images/luke.jpg";
                break;
            case("anakin") :
                img.src = "assets/images/anakin.jpg";
                break;
            case("r2d2") :
                img.src = "assets/images/artoo.jpg";
                break;
            case("chewbacca") :
                img.src = "assets/images/chewbacca.jpg";
                break;
            case("darthmaul") :
                img.src = "assets/images/darthmaul.jpg";
                break;
            case("darthvader") :
                img.src = "assets/images/darthvader.jpg";
                break;
            case("hansolo") :
                img.src = "assets/images/hansolo.jpg";
                break;
            case("lando") :
                img.src = "assets/images/lando.jpg";
                break;
            case("leia") :
                img.src = "assets/images/leia.jpg";
                break;
            case("obiwankenobi") :
                img.src = "assets/images/obiwan.jpg";
                break;
            case("c3p0") :
                img.src = "assets/images/threepio.jpg";
                break;
            case("yoda") :
                img.src = "assets/images/yoda.jpg";
                break;
            case("rey") :
                img.src = "assets/images/rey.jpg";
                break;
            case("finn") :
                img.src = "assets/images/finn.jpg";
                break;
            case("phasma") :
                img.src = "assets/images/phasma.jpg";
                break;
            case("poe") :
                img.src = "assets/images/poe.jpg";
                break;
            case("kyloren") :
                img.src = "assets/images/kyloren.jpg";
                break;
            
        };
        
    };

    function roundLoss() {
        availInput = [];
        losses++;
        lossCounter.textContent = losses;
        
    };

    

};