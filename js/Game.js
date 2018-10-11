class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      ['final fantasy', 'the last of us', 'super mario galaxy'],
      ['where the red fern grows', 'jurassic park', 'confederacy of dunces'],
      ['not now ma', 'thank you for being a friend', 'grab that dough'],
      ['knit one purl one', 'whittle soap', 'the looming loom in the room']];
    this.phrase = null;
    this.clue = null;
  }

  /**
  * 1) Generates a random phrase from the game.phrases array of arrays
  * 2) Based on the first array selected, updates the game.clue property and selects a single phrase from that array
  */
  getRandomPhrase() {
    const index1 = Math.floor(Math.random() * this.phrases.length);
    function index2(index1) {
      return Math.floor(Math.random() * game.phrases[index1].length);
    }
    if (index1 === 0) {
      this.clue = 'Video Games';
      return this.phrases[index1][index2(index1)];
    } else if (index1 === 1) {
      this.clue = 'Literature';
      return this.phrases[index1][index2(index1)];
    } else if (index1 === 2) {
      this.clue = 'Golden Girls Quotes';
      return this.phrases[index1][index2(index1)];
    } else {
      this.clue = 'Crafts';
      return this.phrases[index1][index2(index1)];
    }
  }

  /**
  * 1) Checks to see if there is a current clue displayed and deletes the element from the document
  * 2) Creates a new header and fills in the current game.clue property associated with the selected phrase
  */
  addClueToDisplay() {
    const header = document.querySelector('#banner');
    if (header.firstElementChild.nextElementSibling) {
      header.removeChild(header.firstElementChild.nextElementSibling);
    }
    const clueHeader = document.createElement('h3');
    clueHeader.innerText = `Clue: ${this.clue}`;
    header.appendChild(clueHeader);
  }

  /**
  * Checks for correct matching between the letter and phrase - runs different scripts whether right or wrong
  * @param {Object} event The event object triggered when the keyboard button is clicked
  */
  handleInteraction(event) {
    if (this.phrase.checkLetter(event)) {
      event.target.className = 'chosen';
      this.phrase.showMatchedLetter(event);
      this.checkForWin();
    } else {
      event.target.className = 'wrong';
      this.removeLife();
    }
  }

  /**
  * 1) Checks for game over status based on number of misses
  * 2) Changes the hearts at the bottom to empty hearts based on how many incorrect guesses the player has
  */
  removeLife() {
    const hearts = document.querySelectorAll('.tries');
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver('lose');
    } else {
      for (let i=0; i < this.missed; i++) {
        hearts[i].firstElementChild.setAttribute('src', 'images/lostHeart.png');
      }
    }
  }

  /**
  * Runs through the phrase list items on display and updates a counting variable to decide if all elements have been guessed
  */
  checkForWin() {
    const phraseList = document.querySelector('#phrase').firstElementChild.children;
    let correctGuesses = 0;
    for (let i=0; i<phraseList.length; i++) {
      if (phraseList[i].className === 'show') {
        correctGuesses += 0;
      } else if (phraseList[i].className === 'hide space') {
        correctGuesses += 0;
      } else {
        correctGuesses -= 1;
      }
    }
    if (correctGuesses === 0) {
      this.gameOver('win');
    }
  }

  /**
  * Returns the start screen display with appnded message whether the player won or lost. Does not display the start game button.
  * @param {String} state String dictating whether the game over is from winning or losing.
  */
  gameOver(state) {
    document.querySelector('#overlay').style.display='flex';
    if (state === 'win') {
      document.querySelector('#game-over-message').innerText = 'Congratulations! You won! Refresh the page to play again.';
      document.querySelector('#btn__reset').style.display = 'none';
    } else {
      document.querySelector('#game-over-message').innerText = 'Sorry! Refresh the page to try again.';
      document.querySelector('#btn__reset').style.display = 'none';
    }
  }

  /**
  * Generates a new phrase object to start the game, updates the clue, and puts the phrase into the document.
  */
  startGame() {
    this.phrase = new Phrase(this.getRandomPhrase());
    this.addClueToDisplay();
    this.phrase.addPhraseToDisplay();
  }
}
