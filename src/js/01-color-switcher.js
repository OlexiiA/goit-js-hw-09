// let btnRef = selector => document.querySelector(selector);

// btnRef(`[data-start]`).addEventListener("click", onStartChange);
// btnRef(`[data-stop]`).addEventListener("click", onStopChange);
const startBtnRef = document.querySelector(`[data-start]`);
const stopBtnRef = document.querySelector(`[data-stop]`);

startBtnRef.addEventListener("click", onStartChange);
stopBtnRef.addEventListener("click", onStopChange);

let interval; // = null;

function onStartChange() {
startBtnRef.disabled = true; 
stopBtnRef.disabled = false;
interval = setInterval(() => {
document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
};


function onStopChange() {
    clearInterval(interval);
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };




  