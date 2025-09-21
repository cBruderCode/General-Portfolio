var guess = 0;
function playGuessingGame(numToGuess, totalGuesses = 10) {
  guess = prompt("Enter a number between 1 and 100.");
  for (i = 1; i <= totalGuesses; i++) {
    if (isNaN(guess)) {
      i--;
      guess = prompt("Please enter a number.");
      continue;
    }
    if (guess ==  null){
      break;
    }
    if (guess > numToGuess) {
      console.log("test");
      guess = prompt(guess + " is too large. Guess a smaller number.");
      continue;
    }
    if (guess < numToGuess) {
      console.log("test");
      guess = prompt(guess + " is too small. Guess a larger number.");
      continue;
    }
    if (guess == numToGuess) {
      console.log("test");
      return i;
    }
  }
  return 0;
}
