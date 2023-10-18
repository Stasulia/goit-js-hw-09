const refs = {
body: document.querySelector('body'),
startBtn: document.querySelector('button[data-start]'),
stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', handlerStart);
refs.stopBtn.addEventListener('click', handlerStop);

let idColor = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function handlerStart() {
    toggleBtnState (true, false);
    idColor = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    }, 1000);
}

function handlerStop() {
    toggleBtnState (false, true);
    clearInterval(idColor);
}

function toggleBtnState(startDisabled, stopDisabled) {
  refs.startBtn.disabled = startDisabled;
  refs.stopBtn.disabled = stopDisabled;
}