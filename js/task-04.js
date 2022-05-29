// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
});
increment.addEventListener('click', () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
});