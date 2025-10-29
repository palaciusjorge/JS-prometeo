const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longest = "";
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }
  return longest;
}
console.log(findLongestWord(avengers))