//GLOBAL VARIABLES----------------------------------------------

const words = ["Summit", "Surly", "Schells"]; // the word bank array
let maxWords = words.length;
let wins = 0;
let wordSelected="";
let lettersGuessed=[];
let letterToCheck;
let numberOfGuesses=5;

//this function iterates wins variable
function wonGame() {
    wins++;
}

//the random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


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

//Reset Game function
function resetGame() {
    lettersGuessed=[]; // reset letters guessed
    printLettersGuessed();
    numberOfGuesses=5; // reset number of guesses
    printGuesses()
}

//word selector function
function wordSelector() {
    let randomNumber=0; //creates a local variable randomNumber
    randomNumber=getRandomInt(maxWords); //sets randomNumber equal to getRandomInt call
    wordSelected=words[randomNumber]; // sets global variable to random index value of words array
    console.log(wordSelected); // for debugging
}

//word splitter function, splits the selected word apart
function wordSplitter(value) {
    let splitWord=[]; //creates an empty array, maybe move this to globabl?
    splitWord=value.split(""); // splits the string apart into its constituents into the splitWord array
    console.log(splitWord); //debugging
    console.log(splitWord.length); //debugging
}

//trying to build the guesser component
function guesser(arr) {

}

// ---------------------GAMEPLAY---------------------------------------------
wordSelector();
wordSplitter(wordSelected);
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