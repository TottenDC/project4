class Phrase {
  constructor (phrase) {
    this.phrase = this.generatePhraseArray(phrase);
  }

  generatePhraseArray(phrase) {
    return phrase.split(/(\w)/).filter(character => character !== '');
  }

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

  checkLetter(event) {
    let guess = event.target.innerText;
    for (let letter of this.phrase) {
      if (guess === letter) {
        return true;
      }
    }
    return false;
  }

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
