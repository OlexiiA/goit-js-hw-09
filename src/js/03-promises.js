import Notiflix from 'notiflix';

const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');
const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let delayTime = Number(delayRef.value);
  let stepTime = Number(stepRef.value);
  for (let i = 1; i <= amountRef.value; i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += stepTime;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}