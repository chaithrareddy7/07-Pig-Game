'use strict';

let player0 = document.getElementById('score--0');
let player1 = document.getElementById('score--1');

let currentscore0 = document.querySelector('#current--0');
let currentscore1 = document.querySelector('#current--1');

let diceimg = document.querySelector('.dice');

player0.textContent = 0;
player1.textContent = 0;

let activeplayer = 0;

function switchplayer() {
  document.querySelector(`#current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
  currentscore = 0;
}

let currentscore = 0;
document.querySelector('.btn--roll').addEventListener('click', function () {
  let randomnum = Math.trunc(Math.random() * 6) + 1;
  diceimg.src = `dice-${randomnum}.png`;
  if (randomnum !== 1) {
    currentscore = currentscore + randomnum;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentscore;
  } else {
    switchplayer();
  }
});
