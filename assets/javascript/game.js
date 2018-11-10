//Random Letter Variable
var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Start game at zero
let wins = 0;
let losses = 0;
let guesses = 10;
let guessed = 10;
let chosenLetters = [];
var letterToGuess = null;

// Random Letter Selection
var chooseLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];

// 10 guesses from player
function updateguessed() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessed;
};

function updateLetterToGuess() {
    this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

// Player's guessed letters
function updateGuessesSoFar() { 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + chosenLetters.join(', ');
};
// Start game over
var reset = function() {
    totalGuesses = 10;
    guessed = 10;
    chosenLetters = [];

    updateLetterToGuess();
    updateguessed();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateguessed();

// Player chooses letter
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = letterChoices.includes(userGuess);

    if (check === false) {
        
        alert("Choose a letter, silly!...");
        return false;
    } else if (check === true) {

        // Update guessed letters
        guessed--;
        chosenLetters.push(userGuess);
        updateguessed();
        updateGuessesSoFar();

        if (guessed > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Good job!... I chose " + userGuess);
                reset();
            }
        } else if (guessed == 0) {
            
            losses++;
            
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You suck!... Try again?");
           
            reset();
        }
        return false;
    } else {
        alert("?");
    }

};