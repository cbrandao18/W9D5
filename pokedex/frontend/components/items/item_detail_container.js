import { connect } from 'react-redux';
import { ItemDetail } from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  }
}

// const mapDispatchToProps = dispatch => ({
  
// })

export default connect(
  mapStateToProps
)(ItemDetail);