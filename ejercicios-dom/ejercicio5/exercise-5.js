// Array de álbumes
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Añadimos un contenedor principal
const main = document.createElement('main');
main.style.fontFamily = 'Arial, sans-serif';
main.style.backgroundColor = '#111';
main.style.color = '#eee';
main.style.minHeight = '100vh';
main.style.padding = '20px';

// Título principal
const title = document.createElement('h1');
title.textContent = 'Álbumes Legendarios de Rock';
title.style.textAlign = 'center';
title.style.marginBottom = '30px';
main.appendChild(title);

// Creamos la lista
const ul = document.createElement('ul');
ul.style.display = 'grid';
ul.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
ul.style.gap = '20px';
ul.style.listStyle = 'none';
ul.style.padding = '0';

// Portadas de los álbumes
const albumCovers = {
  "De Mysteriis Dom Sathanas": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Mayhem_demysteriisdomsathanas.jpg/250px-Mayhem_demysteriisdomsathanas.jpg",
  "Reign of Blood": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Reign_in_blood.jpg/250px-Reign_in_blood.jpg",
  "Ride the Lightning": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Ridetl.png/250px-Ridetl.png",
  "Painkiller": "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Judaspainkiller.JPG/250px-Judaspainkiller.JPG",
  "Iron Fist": "https://upload.wikimedia.org/wikipedia/en/8/8f/Mot%C3%B6rhead_-_Iron_Fist_%281982%29.jpg",
};

// Crear cada tarjeta de álbum
albums.forEach(album => {
  const li = document.createElement('li');
  li.style.backgroundColor = '#222';
  li.style.border = '1px solid #333';
  li.style.borderRadius = '10px';
  li.style.padding = '10px';
  li.style.textAlign = 'center';
  li.style.boxShadow = '0 2px 6px rgba(0,0,0,0.5)';

  const img = document.createElement('img');
  img.src = albumCovers[album];
  img.alt = album;
  img.style.width = '100%';
  img.style.borderRadius = '10px';
  img.style.marginBottom = '10px';

  const h3 = document.createElement('h3');
  h3.textContent = album;
  h3.style.fontSize = '1.1rem';
  h3.style.color = '#fff';

  li.appendChild(img);
  li.appendChild(h3);
  ul.appendChild(li);
});

main.appendChild(ul);
document.body.appendChild(main);
