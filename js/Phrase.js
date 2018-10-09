class Phrase {
  constructor (phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const phraseSplit = this.phrase.split(/(\w)/);
    const phraseLetters = phraseSplit.filter(character = character !== '');

    for (letter of phraseLetters) {
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

  checkLetter() {

  }

  showMatchedLetter() {

  }
}
