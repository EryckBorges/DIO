const pokeApi = {}

pokeApi.getPokemonDados = async (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemon = async (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((result) => result.json())
        .then((jsonBody) => jsonBody.results)
        .then((detailsPokemons) => detailsPokemons.map(pokeApi.getPokemonDados))
        .then((detailsRequest) => Promise.all(detailsRequest))
        .then((pokemons) => pokemons)
}
