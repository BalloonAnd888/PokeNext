export interface Pokemon {
  name: string;
  url?: string;
  image: string;
  id: number;
  types: string[];
}

export interface Type {
  [key: string]: {
    name: string;
    icon: string;
    namePlate: string;
  };
}

export interface PokemonResultProps {
  name: string;
  url: string;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonTypeDetailsProps {
  name: string;
  type: {
    name: string;
  };
}

interface FlavorText {
  flavor_text: string;
}

interface Genus {
  genus: string;
  language: {
    name: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: Ability[];
  types: PokemonTypeDetailsProps[];
  cries: {
    latest: string;
    legacy: string;
  };
}

export interface PokemonSpecies {
  evolution_chain: { url: string };
  flavor_text_entries: FlavorText[];
  genera: Genus[];
}

export interface DetailProp {
  details: PokemonDetails;
  species: PokemonSpecies;
}

interface EvolutionDetails {
  min_level: number;
}

interface EvolvesTo {
  evolution_details: EvolutionDetails[];
  evolves_to: EvolvesTo[];
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonEvolution {
  chain: {
    evolves_to: EvolvesTo[];
    species: {
      name: string;
      url: string;
    };
  };
}

export interface EvolutionProp {
  evolution: PokemonEvolution;
  details: PokemonDetails;
}

export interface Level {
  level: number;
}
