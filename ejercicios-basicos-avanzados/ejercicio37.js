const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const moviesCategory = []
for (let movie of movies){
    for (let category of movie.categories){
        if (!moviesCategory.includes(category)){
            moviesCategory.push(category);
        }
    }
}
console.log(moviesCategory);
