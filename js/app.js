let game = null;

function resetDisplay() {
  document.querySelector('#overlay').style.display='none';
}

function markButton(event) {
  event.target.setAttribute('disabled', '');
  game.handleInteraction(event);
}

document.querySelector('#btn__reset').addEventListener('click', () => {
  resetDisplay();
  game = new Game();
  game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', (event) => {
  markButton(event);
});
