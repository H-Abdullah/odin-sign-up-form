const pass = document.getElementById('password');
const cpass = document.getElementById('confirm-password');
const submit = document.getElementById('create-account');
const passAlert = document.getElementById('pass-alert');

let passValue;
let cPassValue;

pass.addEventListener('input', (evt) => {
  passValue = evt.target.value;
})

cpass.addEventListener('input', (evt) => {
  cPassValue = evt.target.value;
})

submit.addEventListener('click', (evt) => {
  if (passValue !== cPassValue) {
    pass.value = '';
    cpass.value = '';
    passAlert.innerText = 'Password mismatch, Try again.'
    passAlert.style.color = 'red';
    passAlert.style.fontSize = '0.8rem';
    passAlert.style.fontWeight = 'bolder';
  } else {
    passAlert.innerText = '';
    return;
  }
})
