// score.js - スコアとハイスコア保存処理

const HIGHSCORE_KEY = 'sennin_highscores';

function saveHighScore(score, rank, difficulty) { const scores = JSON.parse(localStorage.getItem(HIGHSCORE_KEY)) || []; const entry = { score, rank, difficulty, date: new Date().toLocaleString() }; scores.push(entry); scores.sort((a, b) => b.score - a.score); if (scores.length > 10) scores.length = 10; localStorage.setItem(HIGHSCORE_KEY, JSON.stringify(scores)); }

function updateHighScoreList() { const list = document.getElementById('highscore-list'); list.innerHTML = ''; const scores = JSON.parse(localStorage.getItem(HIGHSCORE_KEY)) || []; scores.forEach(entry => { const li = document.createElement('li'); li.textContent = ${entry.score}点 - ${entry.rank}（${entry.difficulty}） ${entry.date}; list.appendChild(li); }); }

