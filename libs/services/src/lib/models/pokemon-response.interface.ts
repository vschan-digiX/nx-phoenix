type language = {
  name:string;
  url: string
}
type description= {
  description : string;
  language : language
}

type names= {
  name : string;
  language : language
}

type pokemonSpecies = {
  name: string
  url: string
}

type pokemonEntry = {
  entry_number : number;
  pokemon_species : pokemonSpecies
}

type region = {
  name : string
  url : string
} 

type version = {
  name : string
  url:string
}

export interface PokemonResponse {
  id : string
  descriptions: description[]
  is_main_series : boolean
  name : string
  names : names[]
  pokemon_entries : pokemonEntry[]
  region : region
  version_groups : version[]
}
