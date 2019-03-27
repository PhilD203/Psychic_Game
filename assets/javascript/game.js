document.onkeyup = function (event) {
var userGuess = event.key;
guessInsert(userGuess);
};
var totalGuesses = 9
var wins = 0
var losses = 0
var guessesLeft = totalGuesses
var pastGuesses = []
var computerChar = computerGenerate()


function guessInsert(userGuess) {
    pastGuesses.push(userGuess)
    document.getElementById("lettersGuessed").innerHTML = pastGuesses
    guessesLeft = guessesLeft - 1
    document.getElementById("guessesLeft").innerHTML = guessesLeft
    if (computerChar == userGuess){
        wins = wins + 1
        document.getElementById("Wins").innerHTML = wins 
        computerGenerate()
    }
    else{
        if(guessesLeft < 1){
            console.log("You Lose")
            losses = losses + 1
            document.getElementById("Losses").innerHTML = losses
            computerGenerate()
        }
        else{
            
        }
      
    }
    
}

function computerGenerate() {
    var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    pastGuesses = [] 
    guessesLeft = totalGuesses 
    return computerGuess
}








