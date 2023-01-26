function playTheGame() {
    const range = [0, 10];
    if (!(confirm("Would you like to play the game?\nEither OK or Cancel."))) {
        alert("OK, No problem (in a passive-aggresive tone)");
    }
    const userInput = prompt(`Please type-in a number from ${range[0]} to ${range[1]}`);
    if (isNaN(userInput)) {
        alert("Sorry, not a number, Goodbye.");
        playTheGame();
    }
    if (userInput > range[1] || userInput < range[0]) {
        alert("Sorry, not a good number, Goodbye.");
        playTheGame();
    }
    const computerNumber = Math.round(Math.random() * (Object.keys(range)[1] - Object.keys(range)[0]) + Object.keys(range)[1]);
    console.log(computerNumber);
    compareNumbers(userInput, computerNumber);
}

function compareNumbers(userNumber, computerNumber, recursionLevel = 0) {
    if (userNumber == computerNumber) {
        alert("WINNER");
        return;
    }
    if (recursionLevel > 2) {
        alert(`You are out of chances! computer's number was ${computerNumber}. GAME OVER`);
        return;
    }
    if (userNumber > computerNumber) {
        userNumber = prompt("your number is bigger then the computer's, guess again, LOSER");
        compareNumbers(userNumber, computerNumber, recursionLevel + 1);
    }
    
    if (userNumber < computerNumber) {
        userNumber = prompt("your number is smaller then the computer's, guess again, LOSER");
        compareNumbers(userNumber, computerNumber, recursionLevel + 1);
    }
    return;
}