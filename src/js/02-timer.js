import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const elements = {
calendar: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('button[data-start]'),
data: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]')
};

let intervalId = null;
let selectedDate = null;
let currentDate = null;
let differenceDate = 0;

elements.startBtn.addEventListener('click', startTimer);
elements.startBtn.disabled = true;

const datePicker = flatpickr(elements.calendar, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0].getTime();
      currentDate = Date.now();
      if (selectedDate <= currentDate) {
        window.alert ("Please choose a date in the future");
        elements.startBtn.disabled = true;
      } else {
        elements.startBtn.disabled = false;
        // const startTimer = () => {
        //   selectedDate = selectedDates[0].getTime();
        //   counter.start();
        // };
        // elements.startBtn.addEventListener('click', startTimer)
      }
    }
});

function startTimer() {
  counter.start();
}

const counter = {
  start() {
  intervalId = setInterval (() => {
  currentDate = new Date();
  //const localTime = currentDate.toLocaleTimeString("uk-Ua");
  //const hours = currentDate.getHours();
  //const minutes = currentDate.getMinutes();
  //const seconds = currentDate.getSeconds();
  differenceDate = selectedDate - currentDate;
  convertMs(differenceDate);

  if (differenceDate <= 0) {
    this.stop();
    elements.startBtn.disabled = false;
    clearInterval(intervalId);
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
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//  addLeadingZero(value) {
//   return String(value).padStart(2, '0');
//  }