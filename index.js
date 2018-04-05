// File containing the logic for the course of the game, which depends on Word.js
var inquirer = require('inquirer');
var Word = require('./word');

var words = ['CATERPILLAR', 'BUMBLEBEE', 'BUTTERFLY', 'DRAGONFLY', 'COCKROACH', 'GRASSHOPPER'];

// Randomly selects a word and uses the Word constructor to store it
var word = new Word(words[Math.floor(Math.random() * words.length)]);
// console.log(word);

// word.checkGuess('a');

// Prompts the user for each guess and keeps track of the user's remaining guesses
count = 0;

var getUserInput = function() {

    if (count < 15) {

        inquirer.prompt([
            {
                name: 'letter',
                message: 'Guess a letter!'
            }
        ]).then(function(input) {
            word.checkGuess(input.letter);
            count++;
            getUserInput();
        })
    }


}

getUserInput();