function convertPokemonTypeToLi(pokemonTypes) {
    return pokemonTypes.map((type) => `<li class="type ${type}">${type}</li>`);
}

function convertPokemonToLi(pokemon) {
    return `
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
    `;
}
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => 
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
);