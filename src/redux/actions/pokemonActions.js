import axios from 'axios';

export const fetchPokemonList = () => async dispatch => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  dispatch({ type: 'SET_POKEMON_LIST', payload: response.data.results });
};

export const fetchPokemonDetail = (id) => async dispatch => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  dispatch({ type: 'SET_CURRENT_POKEMON', payload: response.data });
};

export const addToMyPokemonList = (pokemon) => ({
  type: 'ADD_TO_MY_POKEMON_LIST',
  payload: pokemon,
});

export const removeFromMyPokemonList = (id) => ({
  type: 'REMOVE_FROM_MY_POKEMON_LIST',
  payload: id,
});

export const renameMyPokemon = (id, newName) => async dispatch => {
  try {
    const response = await axios.put('http://localhost:5000/api/pokemon/rename', { id, name: newName });
    if (response.data.success) {
      dispatch({ type: 'RENAME_MY_POKEMON', payload: { id, newName: response.data.newName } });
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error renaming Pokemon:", error);
    alert("Network Error: Failed to rename the Pokemon!");
  }
};

export const releaseMyPokemon = (id) => async dispatch => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/pokemon/release/${id}`);
    if (response.data.success) {
      dispatch(removeFromMyPokemonList(id));
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error releasing Pokemon:", error);
    alert("Network Error: Failed to release the Pokemon!");
  }
};
