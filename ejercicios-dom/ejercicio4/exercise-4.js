// 1.1 - Evento click en el botón con id y clase
const button = document.querySelector('#btnToClick');

button.addEventListener('click', (event) => {
  console.log('Has hecho click en el botón:', event);
});

// 1.2 - Añadir evento 'focus' que muestra el valor del input
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
  console.log('Valor del input (focus):', event.target.value);
});

// 1.3 - Añadir evento 'input' que muestra el valor del input en tiempo real
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) => {
  console.log('Valor actual del input:', event.target.value);
});

