let speed = 1;
let header;

let interval = setInterval(() => {
  header = document.querySelector("._3auIg");
  if (header) {
    clearInterval(interval);
    addBtn();
  }
}, 1000);

function addBtn() {
  let lessSpeed = document.createElement("lessSpeed");
  lessSpeed.innerHTML = "≪";
  lessSpeed.addEventListener("click", () => {
    ctrSpeed(-1);
  });

  let moreSpeed = document.createElement("moreSpeed");
  moreSpeed.innerHTML = "≫";
  moreSpeed.addEventListener("click", () => {
    ctrSpeed(1);
  });

  let speedBtn = document.createElement("speedCtrBtn");
  speedBtn.classList.add("speederBtn");
  speedBtn.addEventListener("click", () => {
    setSpeed();
  });

  header.appendChild(lessSpeed);
  header.appendChild(speedBtn);
  header.appendChild(moreSpeed);
  refreshBtn();
}

function setSpeed() {
  const audios = document.querySelectorAll("audio");
  for (let index in audios) {
    audios[index].playbackRate = speed;
  }
}

function ctrSpeed(param) {
  const min = 0.5;
  const max = 3;

  if (param > 0) {
    speed += 0.25;
    if (speed > max) {
      speed = min;
    }
  } else {
    speed -= 0.25;
    if (speed < min) {
      speed = max;
    }
  }
  refreshBtn();
  setSpeed();
}

function refreshBtn() {
  let btnSpeed = document.querySelector(".speederBtn");
  btnSpeed.innerHTML = speed.toFixed(2) + "x";
}