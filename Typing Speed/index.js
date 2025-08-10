const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing tests help you improve speed and accuracy.",
  "Practice typing daily to boost your productivity.",
  "JavaScript makes web pages interactive and smart."
];

const textDisplay = document.getElementById("text-display");
const textInput = document.getElementById("text-input");
const timeSpan = document.getElementById("time");
const wpmSpan = document.getElementById("wpm");
const accuracySpan = document.getElementById("accuracy");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const restartBtn = document.getElementById("restart-btn");

let timer;
let time = 0;
let testStarted = false;
let timerStarted = false;

function getRandomText() {
  return sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
}

function startTest() {
  resetTest();
  textInput.disabled = false;
  textInput.focus();
  testStarted = true;
  restartBtn.style.display = "inline-block";
}

function startTimer() {
  timer = setInterval(() => {
    time++;
    timeSpan.textContent = time;
    calculateWPM(); // update WPM every second
  }, 1000);
}

function stopTest() {
  clearInterval(timer);
  textInput.disabled = true;
  calculateWPM();
  calculateAccuracy();
  testStarted = false;
  timerStarted = false;
  restartBtn.style.display = "inline-block";
}

function resetTest() {
  clearInterval(timer);
  time = 0;
  testStarted = false;
  timerStarted = false;
  textInput.value = "";
  textDisplay.textContent = getRandomText();
  textInput.disabled = true;
  timeSpan.textContent = "0";
  wpmSpan.textContent = "0";
  accuracySpan.textContent = "100";
}

function calculateWPM() {
  if (time === 0) {
    wpmSpan.textContent = "0";
    return;
  }

  const originalText = textDisplay.textContent;
  const userInput = textInput.value;
  let correctChars = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === originalText[i]) correctChars++;
  }

  const wordsTyped = correctChars / 5;
  const minutes = time / 60;
  const wpm = Math.round(wordsTyped / minutes);

  wpmSpan.textContent = isNaN(wpm) ? "0" : wpm;
}

function calculateAccuracy() {
  const originalText = textDisplay.textContent;
  const userInput = textInput.value;
  let correctChars = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === originalText[i]) correctChars++;
  }

  const accuracy = ((correctChars / originalText.length) * 100).toFixed(0);
  accuracySpan.textContent = accuracy > 100 ? "100" : accuracy;
}

// 🔁 Event Listeners
startBtn.addEventListener("click", () => startTest());
stopBtn.addEventListener("click", () => stopTest());
restartBtn.addEventListener("click", () => startTest());

textInput.addEventListener("input", () => {
  if (testStarted && !timerStarted) {
    startTimer();
    timerStarted = true;
  }
  calculateWPM();
});

resetTest(); // initialize everything
