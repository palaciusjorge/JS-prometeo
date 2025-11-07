const rollDice = (faces) => {
    //no hay randint como en python
    return Math.floor(Math.random() * faces) + 1;
}
console.log(rollDice(6));
console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(34));
console.log(rollDice(41));
