import React from 'react';
import './Pokemon.css'

function Pokemon({ pokemon }) {
    return (
        <div className="pokemon-card">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <p className="pokemon-num">Number: {pokemon.num}</p>
            <p className="pokemon-type">Type: {pokemon.type.join(', ')}</p>
            <p className="pokemon-weaknesses">Weaknesses: {pokemon.weaknesses.join(', ')}</p>
        </div>
    );
}

export default Pokemon;
