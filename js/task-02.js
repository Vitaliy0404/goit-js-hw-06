const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListIngredients = document.querySelector("#ingredients");

const createList = ingredients => {
  return ingredients.map(ingredient => {
    const vegetables = document.createElement('li');
    vegetables.classList.add('item');
    vegetables.textContent = ingredient;

    return vegetables;
  })
}

const elements = createList(ingredients);
createListIngredients.append(...elements);


// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

//1 Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//2 Додасть назву інгредієнта як його текстовий вміст.
//3 Додасть елементу клас item.
//4 Після чого, вставить усі <li> за одну операцію у список ul#ingredients.