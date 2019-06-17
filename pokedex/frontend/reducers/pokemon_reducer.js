import merge from 'lodash/merge'

import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            return merge({}, state, action.pokemon);
        case RECEIVE_POKEMON:
            let pokemon = action.payload.pokemon;
            return merge({}, state, {[pokemon.id]: pokemon})
        default:
            return state;
    }
}

export default pokemonReducer;