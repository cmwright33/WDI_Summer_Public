var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    var secretWord = this.word.wordList[Math.floor(Math.random() * this.word.wordList.length)];
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){

    var correctLetters = "";
    var correctLetters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    var wrongLetters
    var superSecretWord = secretWord.split("");
  _.each(superSecretWord, function(letter){
    if (_.contains(superSecretWord, letter) === true){
      correctLetters += letter;
    } else {
      wrongLetters.push(letter);
    }
  });

   // var correctLetters = "";
   // var wrongLetters = [];
   // var superSecretWord = this.secretWord;
   // _.each(superSecretWord,
   // };

    // var revealedLetters = "";
    // var guessedLettersArray = [];
    // guessedLettersArray.push(guessedLetters);

    // if (_.intersection(guessedLetters, secretWord);
  }
};

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],

  // Takes a new letter as input and updates the game
  makeGuess: function(letter){},
  palyer.guessedLetters.push(letter);
  // Check if the player has won and end the game if so
  checkWin: function(wordString){},

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){}
};

var game = {
  // Resets the game
  resetGame: function(){},

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){

    return secretWord;
  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
};

window.onload = function(){
  // Start a new game
  // Add event listener to the letter input field to grab letters that are guessed
  // Add event listener to the reset button to reset the game when clicked
  // Add event listener to the give up button to give up when clicked
setSecretWord();
};