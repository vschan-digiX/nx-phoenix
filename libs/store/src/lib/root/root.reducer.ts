import { combineReducers } from '@reduxjs/toolkit';
import { pokemonSlice } from '../pokemon/pokemon.slice';

export default combineReducers({
    pokemon: pokemonSlice.reducer,
});
