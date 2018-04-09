// This file contains the logic for the course of the game, which depends on Word.js
// Inquirer is used to get user input

var Word = require('./word');
var inquirer = require('inquirer');

var words = ['CATERPILLAR', 'BUMBLEBEE', 'BUTTERFLY', 'DRAGONFLY', 'COCKROACH', 'GRASSHOPPER', 'CRICKET'];

// This array stores all guesses made
var alreadyGuessed = [];

// Randomly selects a word and uses the Word constructor to store it
var word = new Word(words[Math.floor(Math.random() * words.length)]);

// Prompts the player for each guess and keeps track of the user's remaining guesses
count = 14;
console.log('\nYou have 15 guesses remaining.');
word.checkGuess('');

// Inquirer
var getUserInput = function() {

    // Parameter for recursive call
    if (count > -1) {
        inquirer.prompt([
            {
                name: 'letter',
                message: 'Guess a letter!',
                validate: function (name) {
                    // Allows upper or lower case letters, no spaces, and min/max of 1 character
                    var t = /^[a-zA-Zs]{1,1}$/;
                    return t.test(name);
                }
            }
        ]).then(function(input) {

            var guessUpper = input.letter.toUpperCase();

            // Returns an error message to player if a duplicate letter is entered
            if (alreadyGuessed.indexOf(guessUpper) != -1) {
                console.log('You already guess the letter ' + guessUpper + '. Guess again.\n');
            }
            else {
                // Calls the second function in Word.js to check if guess is correct and display letters/spaces accordingly
                word.checkGuess(guessUpper);

                // Calls the third function in Word.js to check if guess is correct and informs the user
                if (word.hasCorrectGuess(guessUpper)) {
                    console.log('Correct!\n\n');
                }
                else if (!word.hasCorrectGuess(guessUpper)) {
                    console.log('Incorrect!\n\n');
                }

                // Calls the fourth function in Word.js to check for a win
                if (word.isComplete()) {
                    console.log('Congratulations, you win!!\n\n');
                    return;
                }

                // Checks the amount guesses remaining and updates the player
                if (count > 1) {
                    console.log('You have ' + count + ' guesses remaining.');
                }
                if (count === 1) {
                    console.log('You have 1 guess remaining.');
                }
                if (count < 1) {
                    console.log('You are out of guesses. Better luck next time!\n');
                    return;
                }

                // Takes away a guess if a new letter is entered
                count--;
            }

            // Pushes all guesses to array
            alreadyGuessed.push(guessUpper);

            // Recursive call
            getUserInput();
        })
    }
}

getUserInput();



// Test: 
// console.log(word);
// word.checkGuess('a');