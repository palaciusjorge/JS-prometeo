const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

const findMutantByPower = (mutants, power) => {
  const foundMutants = [];
  for (let mutant of mutants){
    if (mutant.power === power){
        foundMutants.push(mutant.name);
    }
  }
  if (foundMutants.length > 0){
    return `Mutantes con el poder "${power}": ${foundMutants.join(', ')}`;
  }
  else{
    return 'No hay mutantes con el poder buscado.'
  }
}
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'mastery of the mystic arts'));

