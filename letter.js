// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

var Letter = function(correctLetter) {

    //   * A string value to store the underlying character for the letter
    this.correctLetter = correctLetter;
    console.log(this.correctLetter + ' is the correct letter.')

    //   * A boolean value that stores whether that letter has been guessed yet
    this.show = false;

}

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.print = function() {
    if (this.show === true) {
        console.log(this.correctLetter);
    }
    else {
        console.log('_');
    }
}

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Letter.prototype.compareToGuess = function(guess) {
    if (guess === this.correctLetter) {
        console.log('Guess "' + guess + '" is correct');
        this.show = true;
    }
    else {
        console.log('Guess "' + guess + '" is incorrect');
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
