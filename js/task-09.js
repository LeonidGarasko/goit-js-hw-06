function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');

btnChange.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  bgColor.textContent = hexColor;
}