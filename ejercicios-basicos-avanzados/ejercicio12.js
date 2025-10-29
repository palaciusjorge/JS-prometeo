const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(arr){
    const resultado = []
    for(let elemento of arr){
        if(!resultado.includes(elemento)){
            resultado.push(elemento);
        }
    }
    return resultado
}
console.log(removeDuplicates(duplicates))