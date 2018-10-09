function resetDisplay() {
  document.querySelector('#overlay').style.display='none';
}

document.querySelector('#btn__reset').addEventListener('click', () => {
  resetDisplay();
  const game = new Game();
  game.startGame();
});
