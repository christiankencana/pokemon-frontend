import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../redux/actions/pokemonActions';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemon.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemonList.map((pokemon, index) => (
          <Link key={index} to={`/pokemon/${index + 1}`} className="bg-gray-200 p-4 rounded-lg text-center">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            <p className="mt-2">{pokemon.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
