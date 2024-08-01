import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetail, addToMyPokemonList } from '../redux/actions/pokemonActions';
import { useParams } from 'react-router-dom';
import api from '../api';

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentPokemon = useSelector(state => state.pokemon.currentPokemon);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  const catchPokemon = async () => {
    const response = await api.post('/catch', {
      id: currentPokemon.id,
      name: currentPokemon.name,
    });
    if (response.data.success) {
      const nickname = prompt("Give your Pokemon a nickname:");
      dispatch(addToMyPokemonList({ ...currentPokemon, nickname, renameCount: 0 }));
    } else {
      alert("Failed to catch the Pokemon!");
    }
  };

  if (!currentPokemon) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold mb-2 text-center">{currentPokemon.name}</h1>
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-2">
        <div className="flex flex-col items-center md:w-1/3 mb-2 md:mb-0">
          <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} className="w-48 h-48 object-contain mb-2" />
          <button onClick={catchPokemon} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Catch</button>
        </div>
        <div className="md:w-2/3">
          <div className="mb-2">
            <h2 className="text-xl font-semibold mb-2">Types</h2>
            <p className="text-gray-700">
              {currentPokemon.types.map(type => (
                <span key={type.type.name} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-md mr-1 mb-1">
                  {type.type.name}
                </span>
              ))}
            </p>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-semibold mb-2">Moves</h2>
            <p className="text-gray-700">
              {currentPokemon.moves.map(move => (
                <span key={move.move.name} className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-md mr-1 mb-1">
                  {move.move.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
