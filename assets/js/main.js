const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?${offset}&${limit}`;

fetch(url)
    .then((response) => response.json())
    .then((responseBody) => console.log(responseBody))
    .catch((error) => console.error(error))
    .finally(() =>console.log('Requisicao concluida'));