import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const fulfilled = document.querySelector('input[name="state"][value="fulfilled"]');

form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    const delay_ms = delay.value;
    console.log('Submitted');
    if (fulfilled.checked) {
        makePromise({ shouldResolve: true, delay: delay_ms })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    } else {
        makePromise({ shouldResolve: false, delay: delay_ms })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
});

const makePromise = ({ shouldResolve, delay }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise in ${delay} ms`);
                iziToast.show({
                    title: '',
                    position: 'topRight',
                    message: `✅ Fulfilled promise in ${delay} ms`,
                    messageColor: 'white',
                    backgroundColor: 'green',
                    progressBar: false, 
                });
            } else {
                reject(`❌ Rejected promise in ${delay} ms`);
                iziToast.show({
                    title: '',
                    position: 'topRight',
                    message: `❌ Rejected promise in ${delay} ms`,
                    messageColor: 'white',
                    backgroundColor: 'orange',
                    progressBar: false,
                });
            }
        }, delay);
    });
};