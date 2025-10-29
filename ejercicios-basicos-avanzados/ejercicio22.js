const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
for (let food of foodSchedule){
    if(!food.isVegan){
        food.name = fruits[0];
        food.isVegan = true;
        fruits.shift();
    }
}
for (let fruit of fruits){
    foodSchedule.push({name: fruit, isVegan: true});
}
console.log(foodSchedule);
