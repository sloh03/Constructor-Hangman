// This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.

var Letter = function(correctLetter) {

    // This string value to stores the underlying character for the letter
    this.correctLetter = correctLetter;

    // This boolean value stores whether that letter has been guessed yet
    this.show = false;
}

// This function returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.print = function() {
    if (this.show === true) {
        return this.correctLetter;
    }
    else {
        return '_';
    }
}

// This function takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Letter.prototype.compareToGuess = function(guess) {
    if (guess == this.correctLetter) {
        this.show = true;
    }
}

module.exports = Letter;



// Testing
// var a = new Letter('b');
// a.compareToGuess('a');
// a.print();

// var b = new Letter('b');
// b.compareToGuess('b');
// b.print();
