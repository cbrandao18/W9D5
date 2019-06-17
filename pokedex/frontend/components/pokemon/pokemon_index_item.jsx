import React from 'react'
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ pokemon }) => {
    return (<li>
        <Link to={`/pokemon/${pokemon.id}`}>
            <p>{pokemon.name}</p>
            <img src={pokemon.image_url} height="50px" />
        </Link>
    </li>)
}