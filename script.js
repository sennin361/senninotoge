// script.js - ゲーム進行制御

let combo = 0; let score = 0; let rank = 'E'; let difficulty = 'normal';

function showStartScreen() { switchScreen('start-screen'); }

function showHighScores() { updateHighScoreList(); switchScreen('highscore-screen'); }

function startGame(selectedDifficulty) { difficulty = selectedDifficulty; document.getElementById('difficulty-label').textContent = 難易度: ${selectedDifficulty}; combo = 0; score = 0; rank = 'E'; updateDisplay(); switchScreen('game-screen'); runGameLoop(); }

function endGame() { document.getElementById('final-score').textContent = スコア: ${score}; document.getElementById('final-rank').textContent = ランク: ${rank}; saveHighScore(score, rank, difficulty); switchScreen('end-screen'); }

function goHome() { switchScreen('home-screen'); }

function switchScreen(id) { document.querySelectorAll('.screen').forEach(screen => { screen.classList.add('hidden'); }); document.getElementById(id).classList.remove('hidden'); document.getElementById(id).classList.add('active'); }

function updateDisplay() { document.getElementById('combo-display').textContent = コンボ: ${combo}; document.getElementById('score-display').textContent = スコア: ${score}; document.getElementById('rank-display').textContent = ランク: ${rank}; }

function runGameLoop() { const area = document.getElementById('game-area'); area.innerHTML = ''; const note = document.createElement('div'); note.style.width = '50px'; note.style.height = '50px'; note.style.background = 'yellow'; note.style.borderRadius = '50%'; note.style.position = 'absolute'; note.style.left = ${Math.random() * 80 + 10}%; note.style.top = '0'; area.appendChild(note);

let start = Date.now(); const duration = difficulty === 'easy' ? 3000 : difficulty === 'hard' ? 1000 : 2000;

const anim = setInterval(() => { const now = Date.now(); const progress = (now - start) / duration; if (progress >= 1) { clearInterval(anim); area.removeChild(note); combo = 0; updateRank(); updateDisplay(); runGameLoop(); return; } note.style.top = ${progress * 100}%; }, 16);

note.addEventListener('click', () => { clearInterval(anim); area.removeChild(note); combo++; score += 100 * combo; updateRank(); updateDisplay(); runGameLoop(); }); }

function updateRank() { if (score >= 10000) rank = 'S'; else if (score >= 7000) rank = 'A'; else if (score >= 4000) rank = 'B'; else if (score >= 2000) rank = 'C'; else if (score >= 1000) rank = 'D'; else rank = 'E'; }

