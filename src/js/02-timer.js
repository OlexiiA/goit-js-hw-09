// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  clickToClose: true,
});

const startBtnRef = document.querySelector('[data-start]');
startBtnRef.disabled = true;
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const inputRef = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtnRef.disabled = false;
    }
  },
};

const calendar = flatpickr('#datetime-picker', options);

startBtnRef.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  inputRef.addEventListener('click', () => {
      clearInterval(intevalId);
      clearTimerInterface();
    },
    { once: true }
  );
  const intevalId = setInterval(() => {
    const ms = calendar.selectedDates[0].getTime() - Date.now();
    if (
      calendar.selectedDates[0].getTime() / 1000 ===
      parseInt(Date.now() / 1000)
    ) {
      clearInterval(intevalId);
      Notiflix.Notify.info('Time is out!');
      return;
    }
    updateTimerInterface(convertMs(ms));
  }, 1000);
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
  daysRef.textContent = addLeadingZero(days);
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);
}

function clearTimerInterface() {
  daysRef.textContent = '00';
  hoursRef.textContent = '00';
  minutesRef.textContent = '00';
  secondsRef.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}