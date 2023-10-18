/*Напиши скрипт, який:

1. Порахує і виведи в консоль кількість категорій в ul#categories, тобто елементів li.item.

2. Для кожного элемента li.item у списку ul#categories, знайде і виведи в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
*/

const categoriesList = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  console.log(`Category: ${categoryName}`);

  const categoryItems = category.querySelectorAll("ul > li");

  console.log(`Elements: ${categoryItems.length}`);
});
