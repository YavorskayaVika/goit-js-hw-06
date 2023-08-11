const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const ingredientsNewArr = [];

for (let i = 0; i < ingredients.length; i++) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredients[i];
  itemEl.classList.add("item");
  ingredientsNewArr.push(itemEl);


}

ul.append(...ingredientsNewArr);




// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.