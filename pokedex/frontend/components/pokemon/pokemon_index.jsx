import React from 'react'
import {PokemonIndexItem} from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render(){
        const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

        return (
        <div>
            <Route exact path='/' component={PokemonFormContainer} />
            <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
            <ul>
                {pokemonItems}
            </ul>
        </div>)
    }
}

export default PokemonIndex;