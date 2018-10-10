class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      ['final fantasy', 'the last of us', 'super mario galaxy'],
      ['where the red fern grows', 'jurassic park', 'confederacy of dunces'],
      ['not now ma', 'can you believe that backstabbing slut', 'grab that dough'],
      ['knit one purl one', 'whittle soap', 'the looming loom in the room']];
    this.phrase = null;
    this.clue = null;
  }

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

  addClueToDisplay() {
    const header = document.querySelector('#banner');
    if (header.firstElementChild.nextElementSibling) {
      header.removeChild(header.firstElementChild.nextElementSibling);
    }
    const clueHeader = document.createElement('h3');
    clueHeader.innerText = `Clue: ${this.clue}`;
    header.appendChild(clueHeader);
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
    this.addClueToDisplay();
    this.phrase.addPhraseToDisplay();
  }
}
