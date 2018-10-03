//GLOBAL VARIABLES----------------------------------------------

const words = ["summit", "surly", "schells", "fulton", "indeed","bang", "bauhaus","fitgers", "finnegans", "insight", "invictus", "lynnlake", "modist", "pyres", "sisyphus", "sociable", "utepils", "waldmann", "voyageur"]; // array for the word bank
let maxWords = words.length;
let wins = 0;
let wordSelected="";
let lettersGuessed=[];
let letterToCheck;
let numberOfGuesses=8;
let splitWord=[]; //creates an empty array
//var splitWord=wordSelected.split(""); //splits the selected word into individual letters
let guessInProgress=[]; //sets up the blank array for guess in progress
let correctLetters=[]; //empty array where the correct letters go

//var splitupTestWord=[];

//console.log(testWord);
//console.log(splitupTestWord);

//---FUNCTIONS----------------------------------------------------

//Prepares the hangman blanks
function prepareGuessInProgress () {
    spaces=splitWord.length; // sets spaces equal the length of the splitWord array
    for (i=0; i < spaces; i++) {
        guessInProgress.push(" __ "); // for loop that pushes the appropriate number of blanks into guessInProgress
    }
  }


//the tester function
function tester (e) {
  for(i=0; i<splitWord.length; i++) {
    if(e==splitWord[i]) {
      correctLetters.push(e);
      //console.log('correct letter' + e);
      for (j=0; j<correctLetters.length; j++) {
        if(splitWord[i]=correctLetters[j]) {
          guessInProgress[i] = correctLetters[j];
        } // else guessInProgress[i] = "*";
      } 
     }
    }
}

  

//this function iterates wins variable
function wonGame() {
    wins++;
    document.getElementById("wins").innerHTML = wins;

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


//word selector function
function wordSelector() {
    let randomNumber=0; //creates a local variable randomNumber
    randomNumber=getRandomInt(maxWords); //sets randomNumber equal to getRandomInt call
    wordSelected=words[randomNumber]; // sets global variable to random index value of words array
    console.log(wordSelected); // for debugging
}

//word splitter function, splits the selected word apart
function wordSplitter(value) {
    splitWord=value.split(""); // splits the string apart into its constituents into the splitWord array
//    console.log(splitWord); //debugging
//    console.log(splitWord.length); //debugging
}



//takes however long the target word is, creates that many spaces, and prints it on the webpage
function printSpaces() {
    document.getElementById("spaces").innerHTML=guessInProgress.join(" ");
}

//tests to see if the player won
function didIWin() {
    let counter = 0;
    for (k = 0; k < wordSelected.length; k++) {
      if (guessInProgress[k] === wordSelected[k]) {
        counter++;
      }
    }
    if (counter === wordSelected.length) {
        return true;
     // console.log("You won!");
    } else return false; //console.log("Keep trying");
  }

//Keep playing function
function keepPlaying() {
    if (lettersGuessed.some(checkLetter)) { //if any checkletter matches any already in lettersguess array, true
        console.log("Already guessed!");//debug
    } else {
        lettersGuessed.push(event.key); // pushes the letter typed into the lettersGuessed array
        numberOfGuesses--;
        console.log(lettersGuessed); // debug purposes
        printLettersGuessed();
        tester(event.key);
        printSpaces();
        printGuesses();
    }
}

//Reset Game function
function resetGame() {
    lettersGuessed=[]; // reset letters guessed
    guessInProgress=[]; //resets guessInProgress
    correctLetters=[]; // resets correct letters
    splitWord=[]; // resets splitWord
    numberOfGuesses=8; // reset number of guesses
    wordSelector(); // selects the word
    wordSplitter(wordSelected); //splits the selected word apart
    prepareGuessInProgress(); // prepares the guessInProgress array with requisite number of blanks
    printGuesses(); // displays total number of guesses
    printSpaces(); // displays contents of guessInProgress on page
}

// ---------------------GAMEPLAY---------------------------------------------

//Initial Load of Game
resetGame();

//Once a key is pressed
document.onkeyup = function(event) {
    letterToCheck = (event.key); //set letterToCheck to the letter typed on keyboard
    if (numberOfGuesses > 0 && didIWin()===false) { // while there are still guesses remaining, do this:
        keepPlaying();
    } else  {     // once guesses are exhausted do this:
            if(didIWin()===true) {
                wonGame();
                resetGame();
            } else resetGame();}
    }
