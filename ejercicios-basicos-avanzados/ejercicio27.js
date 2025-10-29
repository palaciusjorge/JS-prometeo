const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];
let oldestCartoon = cartoons[0];
let oldest = cartoons[0].debut;
for (let cartoon of cartoons) {
  if (cartoon.debut < oldest) {
    oldest = cartoon.debut;
    oldestCartoon = cartoon;
  }
}
console.log(`El dibujo animado más antiguo es ${oldestCartoon.name} que se estrenó en ${oldestCartoon.debut}.`);
