function loadPokemonUnique () {
    const pokemonUnique = document.getElementById('pokemon-unique');
    const params = new URLSearchParams(window.location.search);
    const pokemonId = params.get('pokemonId');
    pokeApi.getPokemonUnique(pokemonId).then((pokemon) => pokemonUnique.innerHTML += 
    `
    <span class="name">${pokemon.name}</span>
    <span class="number">#${pokemon.number}</span>
    <div class="detail">
        <ul class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ul>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    `);
}

loadPokemonUnique();