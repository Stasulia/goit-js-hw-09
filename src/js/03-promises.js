import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelectorAll('[name="amount"]'),
  btnSubmit: document.querySelector('button')
}
refs.form.addEventListener('click', handler);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
  if (shouldResolve) {
    // Fulfill
    resolve({position, delay});
  } else {
    // Reject
    reject({position, delay});
  }
}, delay);
});
}

function handler(event) {
  event.preventDefault();
  const {delay, step, amount} = event.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    inputDelay += inputStep;

    createPromise(i, inputDelay)
    .then(({position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    event.currentTarget.reset();
  }
}