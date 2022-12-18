let timer = document.getElementById("time");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let counter;
let start = false;
let sec = 0;
let min = 0;

startBtn.onclick = () => {
  if (start != true) {
    start = true;
    counter = setInterval(() => {
      sec++;
      if (sec == 60) {
        min++;
        sec = 0;
      }
      if (sec < 10) {
        timer.innerHTML = `${min}:0${sec}`;
      } else {
        timer.innerHTML = `${min}:${sec}`;
      }
    }, 1000);
  }
};

stopBtn.onclick = () => {
  start = false;
  clearInterval(counter);
};

resetbtn.onclick = () => {
  start = false;
  clearInterval(counter);
  sec = 0;
  min = 0;
  timer.innerHTML = `${min}:0${sec}`;
};
