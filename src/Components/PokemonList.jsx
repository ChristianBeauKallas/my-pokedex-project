import React from 'react';
import Pokemon from './Pokemon';
import './PokemonList.css';

function PokemonList({ pokemonList }) {
    return (
        <div className='PokemonList'>
            {pokemonList.map((pokemon, index) => (
                <Pokemon key={index} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonList;