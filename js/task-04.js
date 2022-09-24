const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");


let counterValue = 0;

const counterDecrement = function() {
  counterValue -= 1;
  value.textContent = counterValue;
};

const counterIncrement = function() {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", counterDecrement);
increment.addEventListener("click", counterIncrement);