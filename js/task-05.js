const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', newName);

function newName(event) {
    const inputValue = event.currentTarget.value;
        if (inputValue!= "") {
            outputName.textContent = inputValue;
        } else {
            outputName.textContent = "Anonymous";
        }};