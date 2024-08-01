const initialState = {
    pokemonList: [],
    currentPokemon: null,
    myPokemonList: [],
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POKEMON_LIST':
        return {
          ...state,
          pokemonList: action.payload,
        };
      case 'SET_CURRENT_POKEMON':
        return {
          ...state,
          currentPokemon: action.payload,
        };
      case 'ADD_TO_MY_POKEMON_LIST':
        return {
          ...state,
          myPokemonList: [...state.myPokemonList, action.payload],
        };
      case 'REMOVE_FROM_MY_POKEMON_LIST':
        return {
          ...state,
          myPokemonList: state.myPokemonList.filter(pokemon => pokemon.id !== action.payload),
        };
      case 'RENAME_MY_POKEMON':
        return {
          ...state,
          myPokemonList: state.myPokemonList.map(pokemon =>
            pokemon.id === action.payload.id ? { ...pokemon, nickname: action.payload.newName } : pokemon
          ),
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  