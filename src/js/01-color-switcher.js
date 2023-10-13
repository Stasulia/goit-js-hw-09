const elements = {
body: document.querySelector('body'),
startBtn: document.querySelector('button[data-start]'),
stopBtn: document.querySelector('button[data-stop]'),
};

elements.startBtn.addEventListener('click', handlerStart);
elements.stopBtn.addEventListener('click', handlerStop);



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function handlerStart() {
    elements.startBtn.disabled = true;
    elements.stopBtn.disabled = false;
    idColor = setInterval(() => {
    const color = getRandomHexColor();
    elements.body.style.backgroundColor = color;
    }, 1000);
}

function handlerStop() {
    elements.startBtn.disabled = false;
    elements.stopBtn.disabled = true;
   // elements.body.style.backgroundColor = 'transparent';
   clearInterval(idColor);
}