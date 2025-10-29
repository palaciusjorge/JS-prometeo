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

function findOldestXMen(xMen) {
    let oldest = xMen[0];
    for (let character of xMen){
        if (character.year < oldest.year){
            oldest = character;
        }
    }
    return oldest
}
const oldestXMen = findOldestXMen(xMen);
console.log(`El X-Men más antiguo es ${oldestXMen.name} que apareció en ${oldestXMen.year}.`);

