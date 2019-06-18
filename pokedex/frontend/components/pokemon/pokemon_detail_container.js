import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokemonItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    let pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
    return {
        pokemon,
        items: selectPokemonItems(state, pokemon)
    }
}

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);