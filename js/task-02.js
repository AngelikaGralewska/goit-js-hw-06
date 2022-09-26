const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsItem = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {

const ingredientsItem = document.createElement("li");


ingredientsItem.textContent = ingredient;

ingredientsItem.classList.add("item");

return ingredientsItem

});

ingredientsItem.after(...ingredientsList);