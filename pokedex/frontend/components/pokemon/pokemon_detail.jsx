import React from 'react';
import ItemDetailContainer from '../items/item_detail_container'
import { Route } from 'react-router-dom';
import Item from '../items/item'

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
        if (!pokemon.poke_type) return null
        let items = this.props.items
        
        let itemLists = items.map((item) => {
            return (
                <Item 
                item={item}
                key={item.id}
                />
            )
        })
        return (
            <div>
                <div>
                    <img src={pokemon.image_url} alt="" height="380px" />
                    <h1>{pokemon.name}</h1>
                    <p>Type: {pokemon.poke_type}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <p>Moves: {pokemon.moves}</p>
                </div>
                <div> 
                    <h2>Items</h2>
                    <ul>
                        {itemLists}
                    </ul>
                </div>
                <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
            </div>
        )
    }
}

export default PokemonDetail;