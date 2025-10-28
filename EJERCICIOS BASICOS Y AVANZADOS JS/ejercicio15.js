const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
let camisetas = [];
for (let producto of products){
    if (producto.includes('Camiseta')){
        camisetas.push(producto);
    }
}
console.log(camisetas)
