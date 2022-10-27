let btnRef = selector => document.querySelector(selector);

btnRef(`[data-start]`).addEventListener("click", onStartChange);
btnRef(`[data-stop]`).addEventListener("click", onStopChange);

let interval; // = null;

function onStartChange() {
btnRef(`[data-start]`).disabled = true; 
btnRef(`[data-stop]`).disabled = false;
interval = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
};


function onStopChange() {
    clearInterval(interval);
    btnRef(`[data-start]`).disabled = false;
    btnRef(`[data-stop]`).disabled = true;
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };