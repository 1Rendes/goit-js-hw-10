import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', event => submitHandler(event));
function submitHandler(event) {
  const delay = form.elements.delay.valueAsNumber;
  const state = form.elements.state.value;
  event.preventDefault();
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
  p.then(delay => {
    iziToast.success({
      title: 'OK',
      position: 'topRight',
      message: `Fulfilled promise in ${delay}ms`,
    });
  }).catch(delay =>
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: `Rejected promise in ${delay}ms`,
    })
  );
}
