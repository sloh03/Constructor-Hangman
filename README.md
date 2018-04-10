# Constructor-Hangman

This is a command-line game created using constructor functions.

## Gameplay
The theme of the game is insects. A player can start the game by entering `node index.js` into the command line.

Underscores represent the letters of the hidden word. The player has 15 guesses to try to reveal the hidden word and the number of remaining guesses are displayed after each guess.

The player is prompted to 'Guess a letter!' and if the guess is correct, the letter replaces corresponding underscores. The player is also notified if their guess was 'Correct!' or 'Incorrect!'. If the letter has already been guessed before, it will not use up a remaining guess and the player will be notified to guess again.

![Alt text](images/Gameplay2.jpg?raw=true "StartGame")

## Design
The game is created using 3 main files --  **letter.js**, **word.js**, and **index.js**.

### 1. letter.js
* Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (an underscore), depending on whether or not the user has guessed the letter.

* The constructor defines:

    * A string value that stores the underlying character for the letter
    * A boolean value that stores whether that letter has been guessed yet
    * A function that returns the underlying character if the letter has been guessed, or a placeholder (an underscore) if the letter has not been guessed
    * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

### 2. word.js
* Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.

* The constructor defines:

    * A string value that stores the current word
    * An array that represents the letters of the word
    * An array of `new` Letter objects representing the letters of the underlying word and whether they have been guessed
    * A function that returns a string representing the word. This calls the function on each letter object (the first function defined in `letter.js`) that displays the character or an underscore and concatenates those together
    * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `letter.js`)
    * A function that takes a character as an argument and checks if it exists in the array of correct letters
    * A function that checks if the word is complete by comparing the amount of letters showing to the length of the answer array
    
### 3. index.js
* Contains the logic for the course of the game, which depends on `word.js`
* Randomly selects a word and uses the Word constructor to store it
* Prompts the user for each guess using a recursive call and the `inquirer` npm package, and validates the guess as 1 alphabet character
* Keeps track of duplicate guesses
* Keeps track of correct and incorrect guesses
* Keeps track of the user's remaining guesses and updates the player
* Calls the fourth function in `word.js` to check for a win
    
## Bonus Feature
The `colors` npm package is used to style text in the command window. 'Cyan' is used to notify the player of correct guesses and wins, and 'magenta' is used to notify a player of incorrect or duplicate guesses, as well as a loss.
    
## Languages and Libraries Used
* Node.js
    
## Materials Sources
* [Inquirer npm package](https://www.npmjs.com/package/inquirer)
* [Colors npm package](https://www.npmjs.com/package/colors)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
