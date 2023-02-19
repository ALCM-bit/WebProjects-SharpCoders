const startButton = document.querySelector("#control-painel .start-button");
const stopButton = document.querySelector("#control-painel .stop-button");
const resetButton = document.querySelector("#control-painel .reset-button");
const screenContent = document.querySelector("#screen");
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let cron;
function start() {
  pause();
  cron = setInterval(() => {
    timer();
  }, 10);
}
function pause() {
  clearInterval(cron);
}
function reset() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  screenContent.innerText = "00.00.00.000";
}

function timer() {
  if ((milliseconds += 10) === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  screenContent.innerText = `${hours}.${minutes}.${seconds}.${milliseconds}`;
}

startButton.addEventListener("click", (event) => {
  const value = event.target.innerText;
  console.log(value);
  start();
});

stopButton.addEventListener("click", (event) => {
  const value = event.target.innerText;
  pause();
  console.log(value);
});

resetButton.addEventListener("click", (event) => {
  const value = event.target.innerText;
  reset();
  console.log(value);
});
