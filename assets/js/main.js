const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?${offset}&${limit}`;

fetch(url).then(function (response) {
    return response.json();
})
.then(function (responseBody) {
    console.log(responseBody);
})
.catch(function (error) {
    console.error(error);
}).finally(function () {
    console.log('Requisicao concluida');
});