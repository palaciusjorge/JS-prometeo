const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function buscarNombre(arr, valor) {
  const indice = arr.indexOf(valor);

  if (indice !== -1) {
    return { existe: true, posicion: indice };
  }

  return { existe: false };
}
console.log(buscarNombre(names, 'Jorge'))