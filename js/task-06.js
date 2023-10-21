/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  const textValue = textInput.value.trim();

  const expectedLength = parseInt(textInput.getAttribute("data-length"));

  if (textValue.length === expectedLength) {
    textInput.setAttribute("style", "border-color: #4caf50");
  } else {
    textInput.setAttribute("style", "border-color: #f44336");
  }
});

// trim() метод об'єкту String який не змінює самого рядка, а повертає новий рядок в якому видалені пробіли (пробіли, табуляція, нерозривні пробіли, LF,CR) в кінці і на початку рядка.
