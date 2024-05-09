import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
const formData = {};
form.addEventListener('input', () => inputHandler());
function inputHandler() {
  formData.delay = form.elements.delay.valueAsNumber;
  formData.state = form.elements.state.value;
}
form.addEventListener('submit', event => submitHandler(event));
function submitHandler(event) {
  event.preventDefault();
  const p = new Promise((resolve, reject) => {
    if (formData.state === 'fulfilled') {
      resolve(
        setTimeout(() => {
          iziToast.success({
            title: 'OK',
            position: 'topRight',
            message: `Fulfilled promise in ${formData.delay}ms`,
          });
        }, formData.delay)
      );
    } else if (formData.state === 'rejected') {
      reject(
        setTimeout(() => {
          iziToast.error({
            title: 'Error',
            position: 'topRight',
            message: `Rejected promise in ${formData.delay}ms`,
          });
        }, formData.delay)
      );
    }
  });
  p.then();
  p.catch();
}
