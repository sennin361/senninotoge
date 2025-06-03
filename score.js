// score.js

function saveHighScore(score, difficulty) {
  const key = `highscore_${difficulty}`;
  const currentHigh = parseInt(localStorage.getItem(key)) || 0;
  if (score > currentHigh) {
    localStorage.setItem(key, score);
    return score;
  }
  return currentHigh;
}

function getHighScore(difficulty) {
  const key = `highscore_${difficulty}`;
  return parseInt(localStorage.getItem(key)) || 0;
}
