const refs = {
body: document.querySelector('body'),
startBtn: document.querySelector('button[data-start]'),
stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', handlerStart);
refs.stopBtn.addEventListener('click', handlerStop);

let idColor = null;
isDisabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function handlerStart() {
    refs.startBtn = isDisabled;
    refs.stopBtn = !isDisabled;
    idColor = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    }, 1000);
}

function handlerStop() {
    refs.startBtn = !isDisabled;
    refs.stopBtn = isDisabled;
    clearInterval(idColor);
}