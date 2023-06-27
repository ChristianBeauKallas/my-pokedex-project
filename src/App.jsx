import React, { useState, useEffect } from 'react';
import getPokemon from './getPokemon';
import PokemonList from './Components/PokemonList';
import SearchBox from './Components/SearchBox';
import FilterBox from './Components/FilterBox';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [allWeaknesses, setAllWeaknesses] = useState([]);

  useEffect(() => {
    getPokemon().then(data => {
      setPokemonList(data);

      const types = [...new Set(data.flatMap(pokemon => pokemon.type))];
      const weaknesses = [...new Set(data.flatMap(pokemon => pokemon.weaknesses))];

      setAllTypes(types);
      setAllWeaknesses(weaknesses);
    });
  }, []);

  const filteredPokemon = pokemonList.filter(pokemon => {
    const nameMatches = pokemon.name.toLowerCase().includes(search.toLowerCase());
    const typeMatches = selectedTypes.every(selectedType => pokemon.type.includes(selectedType));
    const weaknessMatches = selectedWeaknesses.every(selectedWeakness => pokemon.weaknesses.includes(selectedWeakness));

    return nameMatches && typeMatches && weaknessMatches;
  });

  return (
    <div className="app">
      <h1>Welcome to the Pokedex!</h1>
      <SearchBox search={search} setSearch={setSearch} />
      <FilterBox allTypes={allTypes} allWeaknesses={allWeaknesses} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} selectedWeaknesses={selectedWeaknesses} setSelectedWeaknesses={setSelectedWeaknesses} />
      <PokemonList pokemonList={filteredPokemon} />
    </div>
  );
}

export default App;

