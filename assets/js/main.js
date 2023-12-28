const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
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
    loadPokemonsItens(offset, limit);
})