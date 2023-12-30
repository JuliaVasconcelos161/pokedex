const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot) =>typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.mainType = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    return pokemon;
}


function convertToPokemonUnique(pokemon) {
    const pokemonUnique = new Pokemon();
    pokemonUnique.number = pokemon.id;
    pokemonUnique.name = pokemon.name;
    const types = pokemon.types.map((typeSlot) =>typeSlot.type.name);
    const [type] = types;
    pokemonUnique.types = types;
    pokemonUnique.mainType = type;
    pokemonUnique.photo = pokemon.sprites.other.dream_world.front_default;
    pokemonUnique.height = pokemon.height;
    pokemonUnique.weight = pokemon.weight;
    pokemonUnique.abilities = pokemon.abilities.map((abilitySlot) => abilitySlot.ability.name);
    return pokemonUnique;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemon) => convertPokeApiDetailToPokemon(pokemon));
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.error(error));
}

pokeApi.getPokemonUnique = (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => convertToPokemonUnique(pokemon))
    .catch((error) => console.error(error));
}


