const pokemonImage = document.querySelector('.random-image');

// Generar un número aleatorio entre 1 y 151
const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 151) + 1;
}

// Función para obtener los datos de un Pokémon
async function fetchRandomPokemon() {
    const pokemonId = getRandomPokemonId();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    try {
        const response = await fetch(apiURL);
        const pokemon = await response.json();

        const normalImage = pokemon.sprites.other['official-artwork'].front_default;
        const shinyImage = pokemon.sprites.front_shiny;

        // Decidimos aleatoriamente si sale shiny (opcional: probabilidad de 1/4096)
        const shinyChance = Math.random();
        if (shinyChance < 0.05 && shinyImage) { // probabilidad del 5% para que salgan mas
            pokemonImage.src = shinyImage;
            alert('¡Te ha salido un shiny, enhorabuena!');
        } else {
            pokemonImage.src = normalImage;
        }

    } catch (error) {
        console.error('Error al cargar el Pokémon:', error);
    }
}

fetchRandomPokemon();