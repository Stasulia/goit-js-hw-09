import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
calendar: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('button[data-start]'),
data: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]')
};

refs.startBtn.addEventListener('click', startTimer);

let intervalId = null;
let selectedDate = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    const currentDate = Date.now();
    if (selectedDate <= currentDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  }
}

flatpickr(refs.calendar, options);

function startTimer() {
  counter.start();
}

const counter = {
  start() {
  intervalId = setInterval (() => {
  const currentDate = Date.now();
  const difference = selectedDate - currentDate;
  refs.startBtn.disabled = true;
  updateCounter(convertMs(difference));
  // const { days, hours, minutes, seconds } = convertMs(difference);
  // refs.seconds.textContent = seconds;
  // refs.minutes.textContent = minutes;
  // refs.hours.textContent = hours;
  // refs.data.textContent = days;
  if (difference <= 1000) {
    refs.startBtn.disabled = false;
    clearInterval(intervalId);
    Notiflix.Notify.success('Timer is over')
  }
  }, 1000)
}
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  updateCounter ({days, hours, minutes, seconds});
  //return { days, hours, minutes, seconds };
}

function updateCounter ({days, hours, minutes, seconds}) {
  refs.seconds.textContent = seconds;
  refs.minutes.textContent = minutes;
  refs.hours.textContent = hours;
  refs.data.textContent = days;
}

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}