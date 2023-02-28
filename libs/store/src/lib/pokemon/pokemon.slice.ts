import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  LoadingStatus,
  PokemonEntity,
} from '@phoenix/models';
import {
  PokemonResponse,
  searchService,
} from '@phoenix/services';

import { RootState } from '../root/root.store';

export const POKEMON_FEATURE_KEY = 'pokemon';

export interface PokemonState extends EntityState<PokemonEntity> {
  loadingStatus: LoadingStatus;
  error?: string;
}

export const pokemonAdapter = createEntityAdapter<PokemonEntity>();


export const initialPokemonState: PokemonState = pokemonAdapter.getInitialState({ loadingStatus: 0 });

export const fetchPokemon = createAsyncThunk<
PokemonEntity[],
void,
{ state: RootState }
>('pokemon/fetchPokemon', async (_, { rejectWithValue }) => {
  try {
    const peopleResponse : PokemonResponse = await searchService.getPokemon();
    return peopleResponse.pokemon_entries.map(pokemon => <PokemonEntity>{ 
      id : pokemon.entry_number , 
      name : pokemon.pokemon_species.name ,
      url : pokemon.pokemon_species.url
    });
  } catch (error) {
    return rejectWithValue({ error });
  }
})

export const pokemonSlice = createSlice({
  name: POKEMON_FEATURE_KEY,
  initialState: initialPokemonState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state: PokemonState) => {
        console.log("enter")

        state.loadingStatus = 1;
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state: PokemonState, action: PayloadAction<PokemonEntity[]> ) => {
          console.log("enter")
          console.log(action.payload)
          pokemonAdapter.setAll(state, action.payload);
          state.loadingStatus = 2;
        }
      )
      .addCase(fetchPokemon.rejected, (state: PokemonState, action) => {
        state.loadingStatus = -1;
        state.error = action.error.message;
      });
  },
});




const { selectAll, selectEntities, selectById } = pokemonAdapter.getSelectors();

export const getPokemonState = (rootState: RootState): PokemonState => rootState[POKEMON_FEATURE_KEY];

export const selectAllPokemon = createSelector(getPokemonState, selectAll);
