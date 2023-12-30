function loadPokemonUnique () {
    const pokemonUnique = document.getElementById('pokemon-unique');
    const params = new URLSearchParams(window.location.search);
    const pokemonId = params.get('pokemonId');
    pokeApi.getPokemonUnique(pokemonId).then((pokemon) => pokemonUnique.innerHTML += 
    `
    <div class="color-type ${pokemon.mainType}">
        <div class="up-content">
            <a class="voltar" href="http://localhost:8080">Voltar</a>
            <span class="name">${pokemon.name} #${pokemon.number}</span>
            <ul class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ul>
            <div class="pokemon-img">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </div>
        <div class="detail">
            <p class="characteristic text">Altura: ${pokemon.height}</p>
            <p class="characteristic text">Peso: ${pokemon.weight}</p>
            <p class="abilities text">Habilidades:</p>
            <ul class="abilities">
                ${pokemon.abilities.map((ability) => `<li class="ability text">${ability}</li>`).join('')}
            </ul>
        </div>
    </div>
    `);
}

loadPokemonUnique();