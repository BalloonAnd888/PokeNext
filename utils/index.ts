import { PokemonResultProps } from "@/types";

export const fetchAllPokemon = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=5000&offset=0`
    );

    const result = await response.json();
    const pokemonList = result.results;

    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon: PokemonResultProps) => {
        const details = await fetchPokemonDetails(pokemon.name);
        return {
          ...pokemon,
          types: details.types.map((typeInfo: any) => typeInfo.type.name),
          id: details.id,
        };
      })
    );

    return detailedPokemonList;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};

export const fetchPokemons = async (offset: number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=60&offset=${offset}`
    );

    const result = await response.json();
    const pokemonList = result.results;

    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon: PokemonResultProps) => {
        const details = await fetchPokemonDetails(pokemon.name);
        return {
          ...pokemon,
          types: details.types.map((typeInfo: any) => typeInfo.type.name),
          id: details.id,
        };
      })
    );

    return detailedPokemonList;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};

export const fetchPokemonDetails = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching details for Pokémon ${name}:`, error);
    return null;
  }
};

export const fetchPokemonSpecies = async (name: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching species details for Pokémon ${name}:`, error);
    return null;
  }
};

export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching`);
    return null;
  }
};
