// accepts the application state as an argument and exports an array of 
// all the pokemon objects.Hint: You can use the Object.values method.
export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectPokemonItems = (state, pokemon) => {
  let items = [];
  if (pokemon.item_ids) {
    items = pokemon.item_ids.map(id => state.entities.items[id])
  } 
  return items;
}

export const selectPokemonItem = (state, itemId) =>{
  return state.entities.items[itemId];
}