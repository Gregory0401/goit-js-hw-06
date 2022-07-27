
const inputRef = document.querySelector('#validation-input');

function checkinputLength() {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}

function inputFocus() {
  inputRef.classList.remove('valid', 'invalid');
}

inputRef.addEventListener('blur', checkinputLength);
inputRef.addEventListener('focus', inputFocus);