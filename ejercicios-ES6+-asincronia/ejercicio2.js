//2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy);
//2.1
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = {...toy};

console.log(toyCopy);
//2.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const allPoints = [...pointsList1, ...pointsList2];

console.log(allPoints);
//2.4
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyFusion = {...toy, ...toyUpdate};

console.log(toyFusion);
//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
colorsCopy.splice(2, 1);
console.log(colorsCopy);


