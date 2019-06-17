import React from 'react';

class PokemonDetail extends React.Component {

    componentDidMount(){
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps){
      if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
      }

    }

    render(){
        let pokemon = this.props.pokemon;

        return (
            <div>
                <img src={pokemon.image_url} alt="" height="380px"/>
                <h1>{pokemon.name}</h1>
                <p>Type: {pokemon.poke_type}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Moves: {pokemon.moves}</p>
            </div>
        )
    }
}

export default PokemonDetail;