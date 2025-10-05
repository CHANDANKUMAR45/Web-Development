// script.js

// Goal Tracker
let dailyGoal = 0;
let progress = 0;

document.getElementById('set-goal').addEventListener('click', () => {
  dailyGoal = parseInt(document.getElementById('daily-goal').value) || 0;
  document.getElementById('goal').textContent = dailyGoal;
});

document.getElementById('update-progress').addEventListener('click', () => {
  const written = parseInt(prompt('Enter words written today:')) || 0;
  progress += written;
  document.getElementById('progress').textContent = progress;
});

// Calendar Planner
const calendar = document.getElementById('calendar');
for (let i = 1; i <= 30; i++) {
  const day = document.createElement('div');
  day.textContent = i;
  calendar.appendChild(day);
}

document.getElementById('add-event').addEventListener('click', () => {
  const date = prompt('Enter day (1-30):');
  const event = prompt('Enter event details:');
  if (date && event) {
    const day = calendar.children[parseInt(date) - 1];
    day.textContent += `\n${event}`;
  }
});

// Mind Map Creator
const canvas = document.getElementById('mind-map-canvas');
const ctx = canvas.getContext('2d');
let nodes = [];

document.getElementById('add-node').addEventListener('click', () => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const text = prompt('Enter node text:');
  if (text) {
    nodes.push({ x, y, text });
    drawMindMap();
  }
});

function drawMindMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes.forEach((node, index) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#007bff';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.fillText(node.text, node.x - 10, node.y + 5);
  });
}
