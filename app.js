// getting elements

let getText = document.getElementById("text");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

// diclaration of variables

let sec = 0;
let min = 0;
let hour = 0;
let id;

function counting() {
  sec++;
  getText.innerText = `${hour}:${min}:${sec}`;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hour++;
    }
  }
}

function startCounter() {
  id = setInterval(counting, 1000);
  startBtn.setAttribute("disabled", "disabled");
  stopBtn.removeAttribute("disabled", "disabled");
}
function stopCounter() {
  stopBtn.setAttribute("disabled", "disabled");
  startBtn.removeAttribute("disabled", "disabled");
  clearInterval(id);
}
function resetCounter() {
  clearInterval(id);
  sec = 0;
  min = 0;
  hour = 0;
  getText.innerText = `00:00:00`;
}
