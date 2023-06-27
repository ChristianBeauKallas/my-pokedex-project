export default function getPokemon() {
    return fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch Pokemon data from API');
            }
            return response.json();
        })
        .then(data => data.pokemon)
        .catch(error => {
            console.error('There has been an error while fetching Pokemon data:', error);
        });
}