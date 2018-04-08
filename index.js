// File containing the logic for the course of the game, which depends on Word.js
var inquirer = require('inquirer');
var Word = require('./word');

var words = ['CATERPILLAR', 'BUMBLEBEE', 'BUTTERFLY', 'DRAGONFLY', 'COCKROACH', 'GRASSHOPPER', 'CRICKET'];

var alreadyGuessed = [];

// Randomly selects a word and uses the Word constructor to store it
var word = new Word(words[Math.floor(Math.random() * words.length)]);

// Test: 
// console.log(word);
// console.log('\n');

// Test:
// word.checkGuess('a');

// Prompts the user for each guess and keeps track of the user's remaining guesses
count = 14;
console.log('You have 15 guesses remaining.');
word.checkGuess('');

var getUserInput = function() {

    if (count > -1) {
        inquirer.prompt([
            {
                name: 'letter',
                message: 'Guess a letter!',
                validate: 
                function (name) {
                    // Allow upper or lower case letters, no spaces, and min/max of 1 character
                    var t = /^[a-zA-Zs]{1,1}$/;
                    return t.test(name);

                } // https://www.sencha.com/forum/showthread.php?83434-regex-no-spaces-and-letters-only
            }
        ]).then(function(input) {

            var guessUpper = input.letter.toUpperCase();

            if (alreadyGuessed.indexOf(guessUpper) != -1) {
                console.log('You already guess the letter ' + guessUpper + '. Guess again.\n');
            }
            else {

                word.checkGuess(guessUpper);

                if(word.isComplete()) {
                    console.log('Congratulations, you win!!\n\n');
                    return;
                }
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

                count--;
            }

            alreadyGuessed.push(guessUpper);
            // console.log('already guessed: ' + alreadyGuessed.toString());

            getUserInput();
        })
    }
}

getUserInput();