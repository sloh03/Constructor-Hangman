// This constructor depends on the Letter constructor, it is used to create an object representing the current word the user is attempting to guess

var Letter = require('./letter');

var Word = function(word) {

    // This string value to stores the current word
    this.word = word;

    // Split word to simple array (used to check guess is included)
    this.correctLetters = this.word.split('');
    
    // This array of `new` Letter objects represent the letters of the underlying word
    this.answerArray = [];

    for(var i = 0; i < word.length; i++) {
        this.answerArray.push(new Letter(word[i]));
    }

}

// This function returns a string representing the word
Word.prototype.toString = function() {

    // This calls the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenates those together
    var display = '';
    for(var i=0; i<this.answerArray.length; i++) {
        display += this.answerArray[i].print() + ' ';
    }
    console.log('\n' + display + '\n\n');
}

// This function takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
Word.prototype.checkGuess = function(guess) {

    for(var i=0; i<this.answerArray.length; i++) {
        this.answerArray[i].compareToGuess(guess);
    }

    this.toString();

}

// This function takes a character as an argument and checks if it exists in the array of correct letters
Word.prototype.hasCorrectGuess = function(guess) {
    if (this.correctLetters.indexOf(guess) != -1) {
        return true;
    }
    return false;
}

// This function checks if the word is complete by comparing the amount of letters showing to the length of the answer array
Word.prototype.isComplete = function() {
    for (var i=0; i < this.answerArray.length; i++) {
        if(!this.answerArray[i].show) return false;
    }
    return true;
}

module.exports = Word;



// Testing
// var word = new Word('apple');
// word.checkGuess('a');
// word.checkGuess('p');
// word.toString();