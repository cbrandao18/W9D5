import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON, 
    pokemon
  }
};

export const receivePokemon = (payload) => {
  return {
    type: RECEIVE_POKEMON,
    payload
  }
};

// export const receiveNewPokemon = (pokemon) => {
//   return {
//     type: RECEIVE_NEW_POKEMON,
//     pokemon
//   }
// };

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchSinglePokemon(id)
    .then(payload => dispatch(receivePokemon(payload)))
)

export const createPokemon = (pokemon) => (dispatch) => (
  APIUtil.createPokemonAjax(pokemon).then((payload) => {
    dispatch(receivePokemon(payload));
    return payload;
  })
)