/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
  if ( e.target.classList.contains('js-ball') ) {
    score += parseInt(e.target.dataset.increment);
    if ( score < 100 ) {
      scoreEl.innerText = score;
    } else {
      declareWinner();
    }
  }
})

function declareWinner() {
  document.body.classList.add('game-over');
}
