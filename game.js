const score = [0, 0]; // [me, pc]
const scoreToGet = 5;

/**
 * Sets the html content of an element
 * @param {string} id html element id
 * @param {string} text text to set
 */
const setHtml = (id, text) => {
  if (typeof document !== "undefined" && document.getElementById(id))
    document.getElementById(id).innerText = text;
  else {
    console.log(text);
  }
};

/**
 * Updates the game score
 * @param {number} i 0: update my score, 1: update the pc score
 */
const handleScore = (i = -1) => {
  if (i >= 0) {
    score[i] = score[i] + 1;
  } else {
    score[0] = 0;
    score[1] = 0;
  }
  setHtml("humanScore", score[0]);
  setHtml("computerScore", score[1]);
  if (score.includes(scoreToGet)) {
    if (score.indexOf(scoreToGet) === 0) {
      setHtml("score", "Congratulations, you win!");
    } else {
      setHtml("Bummer, you loose!");
    }
  } else {
    setHtml("score", "Score");
  }
};

/**
 * Play one round
 * @param {number} a the players choice
 * @param {number} b the computers choice
 */
const next = (a, b = Math.floor(Math.random() * 3)) => {
  // reset the game when a player has won.
  if (score.includes(scoreToGet)) reset();

  // o[n] beats o[n+1]
  const o = ["rock", "scissors", "paper", "rock"];

  // get the first index of duplicate items (rock)
  const me = o.indexOf(o[a]);
  const pc = o.indexOf(o[b]);
  if (me === pc) {
    setHtml("finalResult", "It's a draw");
  } else {
    if (o[me + 1] === o[pc]) {
      setHtml(
        "finalResult",
        `your ${o[me]} beats the computer's ${o[pc]}, you win!`
      );
      handleScore(0);
    } else {
      setHtml(
        "finalResult",
        `the computer's ${o[pc]} beats your ${o[me]}, you loose!`
      );
      handleScore(1);
    }
  }
};

/**
 * Reset the game
 */
const reset = () => {
  setHtml("finalResult", "Take your pick!");
  handleScore();
};
// [0, 1, 1, 2, 0, 1, 2, 1, 2, 1, 2, 3, 1].forEach((e) => next(e));
