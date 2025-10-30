// 1.1 - Crear una lista con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 - Eliminar el elemento con la clase .fn-remove-me
const removeElement = document.querySelector('.fn-remove-me');
if (removeElement) removeElement.remove();

// 1.3 - Crear una lista dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

divPrintHere.appendChild(ulCars);

// 1.4 - Crear divs con un h4 y una imagen dentro
const countryObjects = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement('div');
container.classList.add('country-container');

countryObjects.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const btn = document.createElement('button');

  h4.textContent = item.title;
  img.src = item.imgUrl;
  btn.textContent = 'Eliminar este';

  // 1.6 - Botón que elimina su propio div
  btn.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btn);
  container.appendChild(div);
});

document.body.appendChild(container);

// 1.5 - Botón que elimina el último div de la lista
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.addEventListener('click', () => {
  const divs = container.querySelectorAll('div');
  if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});

document.body.insertBefore(deleteLastBtn, container);
