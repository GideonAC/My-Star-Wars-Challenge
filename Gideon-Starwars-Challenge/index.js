const charactersList = document.querySelector('.characters-list');
const characterDetails = document.querySelector('.character-details');


// Function to fetch Star Wars characters from the API
async function fetchStarWarsCharacters() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        console.log(data)
        const characters = data.results;

        // Display characters with images
        characters.forEach(character => {
            const characterImage = `./Images/${character.name}.png`; // Adjust the path as needed
            character.image = characterImage;
        });

        displayCharacters(characters);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// Function to display characters in the list
function displayCharacters(characters) {
    charactersList.innerHTML = '';
    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.classList.add('character-item');
        characterItem.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        characterItem.addEventListener('click', () => displayCharacterDetails(character));
        charactersList.appendChild(characterItem);
    });
}


// Function to display character details
function displayCharacterDetails(character) {
    characterDetails.innerHTML = `
        <h2>${character.name}</h2>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height} cm</p>
    `;
}

fetchStarWarsCharacters();
