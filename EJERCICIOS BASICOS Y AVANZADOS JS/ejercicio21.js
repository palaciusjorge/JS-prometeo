const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
]
const adults = [];
const minors = [];
for (let user of users){
    if (user.years >= 18){
        adults.push(user);
    }
    else{
        minors.push(user);
    }
}
console.log("Usuarios mayores de edad:");
adults.forEach(user => console.log(user.name));
console.log("Usuarios menores de edad:");
minors.forEach(user => console.log(user.name));