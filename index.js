const url = window.location.href;
const urlsAccepted = [
  {
    url: "https://web.whatsapp.com/",
    mainClass: "._3auIg"
  },
  {
    url: "https://www.instagram.com/direct/",
    mainClass: ".oJZym"
  }
];

let speed = 1;
let motherClass, typePlatform, oldHref, checkHref;

if (url.includes(urlsAccepted[0].url)) {
  typePlatform = 0;
} else if (url.includes(urlsAccepted[1].url)) {
  typePlatform = 1;

  function urlHandler() {
    oldHref = window.location.href;
    let detect = function () {
      if (oldHref != window.location.href) {
        oldHref = window.location.href;
        let divInstagram = document.querySelector("divAudioSpeeder");
        if ((!divInstagram || divInstagram === null) && url.includes(urlsAccepted[1].url)) {
          let intervalInsta = setInterval(() => {
            if (document.querySelector(urlsAccepted[typePlatform].mainClass)) {
              clearInterval(intervalInsta);
              addBtn();
            }
          }, 1000);
        }
      }
    };
    _check = setInterval(() => {
      detect()
    }, 1500);
  }
  new urlHandler();
}


let interval = setInterval(() => {
  if (document.querySelector(urlsAccepted[typePlatform].mainClass)) {
    clearInterval(interval);
    addBtn();
  }
}, 1000);

function addBtn() {
  let header = document.querySelector(urlsAccepted[typePlatform].mainClass);

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

  if (typePlatform === 0) { //WhatsApp
    header.appendChild(lessSpeed);
    header.appendChild(speedBtn);
    header.appendChild(moreSpeed);
  } else { //Instagram
    let div = document.createElement("divAudioSpeeder");
    div.appendChild(lessSpeed);
    div.appendChild(speedBtn);
    div.appendChild(moreSpeed);
    header.appendChild(div);
  }

  refreshBtn();
}

function setSpeed() {
  let audios = document.querySelectorAll("audio");
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
  if (!document.querySelector(".speederBtn")) {
    return;
  }

  let btnSpeed = document.querySelector(".speederBtn");
  btnSpeed.innerHTML = speed.toFixed(2) + "x";
}