
const characterList = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');


const apiURL = 'https://thronesapi.com/api/v2/Characters';


async function fetchCharacters() {
    try {
        const response = await fetch(apiURL);
        const characters = await response.json();

        
        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl; 
            option.textContent = character.fullName;
            characterList.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
}


characterList.addEventListener('change', () => {
    const selectedImage = characterList.value;
    if (selectedImage) {
        characterImage.src = selectedImage;
    } else {
        characterImage.src = ''; 
    }
});


fetchCharacters();
