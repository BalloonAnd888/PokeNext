"use client";

import { useState } from "react";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";
import { Pokemon, Search } from "@/types";
import Load from "./Load";

const SearchComponent = ({ pokemons, allPokemon }: Search) => {
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(pokemons);
  const [load, setLoad] = useState<Boolean>(true);

  const handleSearch = (query: string) => {
    if (query == "") {
      setFilteredPokemon(pokemons);
      setLoad(true);
    } else {
      setLoad(false);
      const filtered = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredPokemon(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* <Filter />
      <Filter /> */}
      <PokemonList pokemons={filteredPokemon} />
      <Load isLoaded={load} />
    </div>
  );
};

export default SearchComponent;
