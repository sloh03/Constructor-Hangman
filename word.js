// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var Letter = require('./letter');

var Word = function(word) {

    this.word = word;
    // console.log('Word is ' + word);
    
    // An array of `new` Letter objects representing the letters of the underlying word
    this.answerArray = [];

    for(var i = 0; i < word.length; i++) {
        this.answerArray.push(new Letter(word[i]));
    }

    // for(var i=0; i<this.answerArray.length; i++) {
    //     var letter = new Letter(this.answerArray[i]);
    // }

}

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
Word.prototype.toString = function() {

    var display = '';
    for(var i=0; i<this.answerArray.length; i++) {
        display += this.answerArray[i].print() + ' ';
    }
    console.log(display);
    // return display;
    // console.log('Testing');

}

// var letter = new Letter('apple');
// letter.print();

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

Word.prototype.checkGuess = function(guess) {

    for(var i=0; i<this.answerArray.length; i++) {
        this.answerArray[i].compareToGuess(guess);
    }

    this.toString();
    // console.log(Letter.showArray)
}

// Testing
var word = new Word('apple');
word.checkGuess('a');
word.checkGuess('p');
//word.toString();

module.exports = Word;

// Map function