import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { releaseMyPokemon, renameMyPokemon } from '../redux/actions/pokemonActions';

const MyPokemonList = () => {
  const myPokemonList = useSelector(state => state.pokemon.myPokemonList);
  const dispatch = useDispatch();

  const releasePokemon = (id) => {
    dispatch(releaseMyPokemon(id));
  };

  const renamePokemon = (id, nickname) => {
    const newName = prompt("Enter new name:", nickname);
    if (newName) {
      dispatch(renameMyPokemon(id, newName));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Pokemon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {myPokemonList.map(pokemon => (
          <div key={pokemon.id} className="bg-gray-200 p-4 rounded-lg text-center">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className="mt-2">{pokemon.nickname}</p>
            <button onClick={() => releasePokemon(pokemon.id)} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">Release</button>
            <button onClick={() => renamePokemon(pokemon.id, pokemon.nickname)} className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Rename</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPokemonList;
