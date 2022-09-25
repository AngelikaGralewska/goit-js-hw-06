const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function  formSubmit (event)  {
 event.preventDefault();

 const {
	elements : {email, password}
 } = event.currentTarget;

 if (email.value === "" || password.value === "") {
    alert(`UZUPEŁNIJ WSZYSTKIE POLA`);
 }

 console.log(email.value, password.value);

 event.currentTarget.reset();
}