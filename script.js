// script.js

const noteContainer = document.getElementById('note-container'); const scoreDisplay = document.getElementById('score'); const comboDisplay = document.getElementById('combo'); const rankDisplay = document.getElementById('rank'); const finalScore = document.getElementById('final-score'); const finalRank = document.getElementById('final-rank'); const highScoreDisplay = document.getElementById('high-score');

let score = 0; let combo = 0; let difficulty = 'normal'; let interval = 1000; let gameInterval; let totalNotes = 0; let perfectHits = 0;

function startGame() { document.getElementById('start-screen').classList.remove('active'); document.getElementById('game-screen').classList.add('active'); difficulty = document.getElementById('difficulty').value; if (difficulty === 'easy') interval = 1200; if (difficulty === 'normal') interval = 900; if (difficulty === 'hard') interval = 600; score = 0; combo = 0; totalNotes = 0; perfectHits = 0; updateDisplay(); gameInterval = setInterval(spawnNote, interval); setTimeout(endGame, 30000); }

function spawnNote() { const note = document.createElement('div'); note.className = 'note'; note.style.left = Math.random() * 90 + '%'; noteContainer.appendChild(note); totalNotes++; note.addEventListener('click', () => { perfectHits++; combo++; score += 100 * combo; updateDisplay(); note.remove(); }); setTimeout(() => { if (note.parentElement) { combo = 0; updateDisplay(); note.remove(); } }, interval); }

function updateDisplay() { scoreDisplay.textContent = score; comboDisplay.textContent = combo; rankDisplay.textContent = getRank(score); }

function endGame() { clearInterval(gameInterval); document.getElementById('game-screen').classList.remove('active'); document.getElementById('end-screen').classList.add('active'); finalScore.textContent = score; finalRank.textContent = getRank(score); const highScore = saveHighScore(score, difficulty); highScoreDisplay.textContent = highScore; }

function getRank(score) { if (score >= 30000) return 'SS'; if (score >= 20000) return 'S'; if (score >= 15000) return 'A'; if (score >= 10000) return 'B'; if (score >= 5000) return 'C'; return 'D'; }

