const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
const swap = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]]; //desestructuracion
  return array;
}

/* 
Primera solución que se me había ocurrido, no sabía que era la desestructuración en JS.
¿Cuál es más correcta?

function swap (array, index1, index2){
    const temp = array[index1]
    array[index1] = array[index1];
    array[index2] = temp;
    }
*/
console.log(swap(fantasticFour, 0, 1));
