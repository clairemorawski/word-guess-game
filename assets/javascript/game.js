const words = ["Summit", "Surly", "Schells"];
let maxWords = words.length;
let wins = 0;

//this function iterates wins variable
function wonGame() {
    wins++;
}

//the random number generator
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(max));
    }

let lettersGuessed=[];

let letterToCheck;

let numberOfGuesses=5;

//to check the letter guessed against those already guessed

var checkLetter = function(element) {
    return element === letterToCheck;
}

//PRINT FUNCTIONS
function printGuesses () {
    document.getElementById("guessesRemaining").innerHTML = numberOfGuesses;
}

function printLettersGuessed() {
    document.getElementById("printLettersGuessed").innerHTML = lettersGuessed;
}

//Keep playing function
function keepPlaying() {
    if (lettersGuessed.some(checkLetter)) { //if any checkletter matches any already in lettersguess array, true
        console.log("Already guessed!");//debugg
    } else {
        lettersGuessed.push(event.key); // pushes the letter typed into the lettersGuessed array
        console.log(lettersGuessed); // debug purposes
        printLettersGuessed();
        numberOfGuesses--;
        printGuesses();
    }
}

//Reset Game functuin
function resetGame() {
    lettersGuessed=[]; // reset letters guessed
    printLettersGuessed();
    numberOfGuesses=5; // reset number of guesses
    printGuesses()
}

// GAMEPLAY
printGuesses();

document.onkeyup = function(event) {
    letterToCheck = (event.key); //set letterToCheck to the letter typed on keyboard
    console.log(letterToCheck); // debug purpose
    if (numberOfGuesses > 0) { // while there are still guesses remaining, do this:
        keepPlaying();
    } else  {     // once guesses are exhausted do this:
          resetGame();
    }
}