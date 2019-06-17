import React from 'react'
import {PokemonIndexItem} from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render(){
        const pokemonItems = this.props.pokemon.map(pokemon => <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);

        return (
        <div>
            <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
            <ul>
                {pokemonItems}
            </ul>
        </div>)
    }
}

export default PokemonIndex;