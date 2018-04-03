var Letter = require('/.letter');

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var Word = function(word) {

    this.word = word;

    //   * An array of `new` Letter objects representing the letters of the underlying word
    this.newLetters = [];

}

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
Word.prototype.toString = function() {

    var output = " ";
    for(var i=0; i<this.newLetters.length; i++) {
        output += this.newLetters[i].print();
    }
    return output;

}

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
Work.prototype.checkGuess = function(guess) {

    for(var i=0; i<this.newLetters.length; i++) {
        this.newLetters[i].compareToGuess(guess);
    }
}

module.exports = Word;