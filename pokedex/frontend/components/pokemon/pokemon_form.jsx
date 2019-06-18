import React from 'react'

class PokemonForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            image_url: '',
            poke_type: 'bug',
            attack: '',
            defense: '',
            moves: {}
        }
        this.update = this.update.bind(this);
        this.updateMoves = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    updateMoves(e) {
        let newMoves = Object.assign({}, this.state.moves, { [e.target.id]: e.target.value})
        this.setState({ moves: newMoves})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPokemon(this.state).then( data => {
            debugger
            this.props.history.push(`/pokemon/${data.pokemon.id}`)
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={this.update('name')}
                        value={this.state.name}
                    />
                    <input
                        type="text"
                        placeholder="Image Url"
                        onChange={this.update('image_url')}
                        value={this.state.image_url}
                    />
                    <select
                        onChange={this.update('poke_type')}
                        defaultValue="Select Pokemon Type">
                        {POKEMON_TYPES.map((type, i) => {
                            return <option value={type} key={i}>{type}</option>;
                        })}
                    </select>
                    <input
                        type="number"
                        placeholder="Attack"
                        onChange={this.update('attack')}
                        value={this.state.attack}
                    />
                    <input
                        type="number"
                        placeholder="Defense"
                        onChange={this.update('defense')}
                        value={this.state.defense}
                    />
                    <input
                        type="text"
                        id="move_1"
                        placeholder="Move 1"
                        onChange={this.updateMoves}
                        value={this.state.moves.move_1}
                    />
                    <input
                        type="text"
                        id="move_2"
                        placeholder="Move 2"
                        onChange={this.updateMoves}
                        value={this.state.moves.move_2}
                    />
                    <button>Create Pokemon</button>
                </form>
                
            </div>
        )
    }
}

export default PokemonForm;