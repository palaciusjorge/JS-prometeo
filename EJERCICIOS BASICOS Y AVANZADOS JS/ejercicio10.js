const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  for(let i =0; i < numberList.length; i++){
    suma =+ numberList[i];
  }
  let average = suma / numberList.length;
  return average;
}
console.log(average(numbers));
