let game = null;

/**
* Hides the start screen display
*/
function resetDisplay() {
  document.querySelector('#overlay').style.display='none';
}

/**
* When a keyboard button is clicked, sets disabled attribute before handing the event to the game object to check the letter
* @param {Object} event The event object triggered when a keyboard button is clicked
*/
function markButton(event) {
  event.target.setAttribute('disabled', '');
  game.handleInteraction(event);
}

/**
* Sets event handler on start button to set up a game object when clicked
*/
document.querySelector('#btn__reset').addEventListener('click', () => {
  resetDisplay();
  game = new Game();
  game.startGame();
});

/**
* Sets event handler on all keyboard buttons to launch game logic
*/
document.querySelector('#qwerty').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    markButton(event);
  }
});
