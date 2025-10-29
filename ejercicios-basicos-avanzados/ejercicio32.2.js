//Versión que imprime todos los xMen del año más antiguo que aparece en la lista

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestGroup(xMen) {
    let oldestYear = xMen[0].year;
  
    for (let character of xMen) {
    if (character.year < oldestYear) {
        oldestYear = character.year;
        }
    }

  
    let oldestCharacters = [];
    for (let character of xMen) {
        if (character.year === oldestYear) {
            oldestCharacters.push(character);
        }
    }

    return oldestCharacters;
}

const oldestGroup = findOldestGroup(xMen);


for (let character of oldestGroup) {
    console.log(`${character.name} apareció en ${character.year}`);
}