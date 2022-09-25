const input = document.querySelector("#font-size-control")

input.addEventListener("input", inputTextSize);

function inputTextSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}