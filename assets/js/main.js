const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((type) => `<li class="type ${type}">${type}</li>`);
}

function loadPokemonsItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => 
        pokemonList.innerHTML += pokemons.map((pokemon) =>
            `
            <li class="pokemon ${pokemon.mainType}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypeToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            `  
        ).join('')
    );
}

loadPokemonsItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const recordsNextPage = offset + limit;
    if(recordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonsItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonsItens(offset, limit);
    }
})