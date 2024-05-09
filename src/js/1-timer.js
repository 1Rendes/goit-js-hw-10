import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input#datetime-picker');
const start = document.querySelector('[data-start]');
let days = document.querySelector('[data-days]');
let hours = document.querySelector('[data-hours]');
let minutes = document.querySelector('[data-minutes]');
let seconds = document.querySelector('[data-seconds]');
let intervalId = null;
start.addEventListener('click', () => {
  startHandler();
});
let userSelectedDate;
start.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (Date.now() >= Date.parse(userSelectedDate)) {
      start.disabled = true;
      iziToast.show({
        position: 'topRight',
        backgroundColor: 'red',
        titleColor: 'white',
        messageColor: 'white',
        title: 'Error:',
        message: 'Please choose a date in the future',
        iconUrl: '/img/error.svg',
      });
    } else {
      start.disabled = false;
    }
    input.value = selectedDates[0];
  },
};
flatpickr(input, options);
function startHandler() {
  start.disabled = true;
  let timeLeftMs = 0;
  intervalId = setInterval(() => {
    timeLeftMs = Date.parse(userSelectedDate) - Date.now();
    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const days = Math.floor(ms / day);
      const hours = Math.floor((ms % day) / hour);
      const minutes = Math.floor(((ms % day) % hour) / minute);
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      return { days, hours, minutes, seconds };
    }
    const timeLeft = convertMs(timeLeftMs);
    function addLeadingZero(value) {
      return String(value).padStart(2, '0');
    }
    days.textContent = addLeadingZero(timeLeft.days);
    hours.textContent = addLeadingZero(timeLeft.hours);
    minutes.textContent = addLeadingZero(timeLeft.minutes);
    seconds.textContent = addLeadingZero(timeLeft.seconds);
    if (timeLeftMs <= 1000) {
      clearInterval(intervalId);
      iziToast.show({
        position: 'topCenter',
        backgroundColor: 'lime',
        title: 'Hey',
        message: 'Time is up!',
      });
    }
  }, 1000);
}
