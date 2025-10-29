//Parte 1
function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
console.log(findArrayIndex(mainCharacters, "Leia"));     
console.log(findArrayIndex(mainCharacters, "Rey"));       
console.log(findArrayIndex(mainCharacters, "Darth Vader")); 
console.log(findArrayIndex(mainCharacters, "Han Solo"))
//Parte 2
function removeItem(array, text){
    const index = findArrayIndex(array, text);
    if (index !== -1) {           
        array.splice(index, 1); 
    }
}

removeItem(mainCharacters, "Darth Vader"); 
console.log(mainCharacters); 