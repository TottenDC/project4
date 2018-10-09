class Game {
  constructor() {
    this.missed = 0;
    this.phrases = ['phrase', 'another phrase', 'last phrase'];
    this.phrase = null;
  }

  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }

  handleInteraction(event) {
    if (this.phrase.checkLetter(event)) {
      this.phrase.showMatchedLetter(event);
      this.checkForWin();
    } else {
      this.removeLife();
    }
  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {

  }

  startGame() {
    this.phrase = new Phrase(this.getRandomPhrase());
    this.phrase.addPhraseToDisplay();
  }
}
