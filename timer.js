let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  let timerDisplay = document.querySelector('.timer');
  timerDisplay.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  let timerDisplay = document.querySelector('.timer');
  timerDisplay.textContent = '00:00:00';
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}
