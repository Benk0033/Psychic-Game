var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];

document.onkeydown = function (start) {
    var userGuess = String.fromCharCode(start.keyCode).toLowerCase();
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessesSoFar.push(userGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert("Good job! One win for you!");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }
    else if (guessesLeft == 0) {
        losses++;
        alert("Sorry, you lose!");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
}
