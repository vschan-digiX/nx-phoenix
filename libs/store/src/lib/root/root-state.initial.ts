import { initialPokemonState } from '../pokemon/pokemon.slice';

import { RootState } from './root.store';

export const initialRootState: RootState = {
  pokemon: initialPokemonState,
};
