class Phrase {
  constructor (phrase) {
    this.phrase = this.generatePhraseArray(phrase);
  }

  /**
  * Creates an array of a single phrase
  * @param {String} phrase - a single phrase to use for the game
  * @return {Array} An array containing the split string without empty string items
  */
  generatePhraseArray(phrase) {
    return phrase.split(/(\w)/).filter(character => character !== '');
  }

  /**
  * Creates li elements from phrase array with respective classes to initialize the game
  */
  addPhraseToDisplay() {
    for (let letter of this.phrase) {
      const playSpace = document.querySelector('#phrase').firstElementChild;
      let li = document.createElement('li');
      li.textContent = letter;
      if (letter !== ' ') {
        li.className = `hide letter ${letter}`;
      } else {
        li.className = `hide space`;
      }
      playSpace.appendChild(li);
    }
  }

  /**
  * Assesses whether the keyboard button clicked matches a letter in the phrase array
  * @param {Object}  event The event object triggered when the keyboard button is clicked
  *@return {Boolean} Returns whether the letter is present in the phrase array
  */
  checkLetter(event) {
    let guess = event.target.innerText;
    for (let letter of this.phrase) {
      if (guess === letter) {
        return true;
      }
    }
    return false;
  }

  /**
  * Changes the class of the phrase list items to make the hidden letter visible
  * @param {Object} event The event object triggered when the keyboard button is clicked
  */
  showMatchedLetter(event) {
    const phraseList = document.querySelector('#phrase').firstElementChild.children;
    let guess = event.target.innerText;
    for (let i=0; i<phraseList.length; i++) {
      let check = phraseList[i].innerText;
      if (guess === check) {
        phraseList[i].className = 'show';
      }
    }
  }
}
