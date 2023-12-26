import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import "izitoast/dist/css/iziToast.min.css";

let selectedTime = null;
const links = {
  date: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  return value.toString().padStart(2, '0');;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  animateInside: false,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
    } else {
      selectedTime = selectedDates[0];
    }
  },
};

class Timer {
  constructor() {
    this.timerID = null;
    this.isActive = false;
    links.button.disabled = true;
    this.toggleButtonAndInput(false);
  }

  startTimer() {
    if (this.isActive) {
      return;
    }
  
    this.isActive = true;
    this.toggleButtonAndInput(true); 
    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      const componentsTimer = convertMs(deltaTime);
      this.updateComponentsTimer(componentsTimer);
      if (deltaTime <= 1000) {
        this.stopTimer();
        this.toggleButtonAndInput(false);
      }
    }, 1000);
  }

  updateComponentsTimer({ days, hours, minutes, seconds }) {
    links.days.textContent = days;
    links.hours.textContent = hours;
    links.minutes.textContent = minutes;
    links.seconds.textContent = seconds;
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  toggleButtonAndInput(disabled) {
    links.button.disabled = disabled;
    links.date.disabled = disabled;
  }
}

const timer = new Timer();
flatpickr(links.date, options);
links.button.addEventListener('click', () => timer.startTimer());