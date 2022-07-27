const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const createList = ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return listItem;
}; 
const listItems = ingredients.map(ingredient => createList(ingredient));

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listItems);