const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151;
const limit = 10;
let offset = 0;



function loadPokemonsItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>
            `
            <button type="button" class="button ${pokemon.number}" value="${pokemon.number}">
            <li class="pokemon ${pokemon.mainType}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            </button>
            `  
        ).join('');
        const button = document.getElementsByClassName('button');
        for(let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', () => {
                window.location.href=`/pokemon-unique?pokemonId=${button[i].value}`;
            });
        }
    }
    );
}

if(loadMoreButton != null) {
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
}



// async function teste() {
//     await pokeApi.getPokemons().then(() => {
        
//     }); 
// }

// teste();

