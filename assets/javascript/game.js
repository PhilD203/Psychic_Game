    
    for (i = 0; i < 26; i++) {

        var li = document.createElement("li");
        li.innerHTML = "letter " + (i+10).toString(36) + " ";
        li.style.listStyle = "none";
        li.style.display = "inline";
        document.getElementById("letter-main").appendChild(li);
      
      }
    
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

    };
 