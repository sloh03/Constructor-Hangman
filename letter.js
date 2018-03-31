// This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

function Letter() {

    //   * A string value to store the underlying character for the letter
    this.correctLetter = 'a';

    //   * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.isGuessed = function() {
        if (this.guessed === true) {
            console.log(this.correctLetter);
        }
        else {
            console.log('_');
        }
    }

    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.isCorrect = function(character) {
        if (character === this.correctLetter) {
            console.log(character + ' is correct');
            this.guessed = true;
        }
        else {
            console.log(character + ' is incorrect');
        }
    }
}

var letters = {};

letters.a = new Letter();

// var letter = process.argv[2];

// letters[letter];

letters.a.isCorrect('a');
letters.a.isGuessed();
