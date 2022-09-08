/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

ballEl.addEventListener('click', function() {
  score += 10;

  if ( score < 100 ) {
    scoreEl.innerText = score;
  } else {
    declareWinner();
  }
});

function declareWinner() {
  document.body.classList.add('game-over');
}
