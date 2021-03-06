export const fetchAllPokemon = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pokemon'
    })
}

export const fetchSinglePokemon = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/pokemon/${id}`
    })
}

export const createPokemonAjax = (pokemon) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pokemon',
        data: {pokemon}
    })
}