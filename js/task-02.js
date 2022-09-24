const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);

const ingredientsItem = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((ingredient) => {

const ingredientsItem = document.createElement("li");
console.log(ingredientsItem);

ingredientsItem.textContent = ingredient;
console.log(ingredientsItem);

ingredientsItem.classList.add("item");

return ingredientsItem

});

ingredientsItem.after(...ingredientsList);