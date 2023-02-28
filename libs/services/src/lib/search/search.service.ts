import { PokemonResponse } from '../models/pokemon-response.interface';

const baseUrl = "https://pokeapi.co/api/v2/"

export async function getPokemon(): Promise<PokemonResponse> {
  const response: Response = await fetch(baseUrl + 'pokedex/kanto');
  if (response.ok) {
    return await response.json();
  }
  throw response;
}

export const searchService = { getPokemon };
