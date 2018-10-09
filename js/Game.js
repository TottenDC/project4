class Game {
  constructor() {
    this.missed = 0;
    this.phrases = ['phrase', 'another phrase', 'last phrase'];
  }

  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }

  handleInteraction() {

  }

  removeLife() {

  }

  checkForWin() {

  }

  gameOver() {

  }

  startGame() {
    const phraseForGame = new Phrase(this.getRandomPhrase());
    phraseForGame.addPhraseToDisplay();
  }
}
