"use client";

import { useState } from "react";
import PokemonList from "./PokemonList";
import SearchBar from "./SearchBar";
import { Pokemon, Search } from "@/types";
import Load from "./Load";
import Filter from "./Filter";

import { Types } from "@/constants";
import { Gens } from "@/constants";

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

  const handleFilter = (query: string) => {
    if (query == "") {
      setFilteredPokemon(pokemons);
      setLoad(true);
    } else {
      setLoad(false);
      const filtered = allPokemon.filter((pokemon) =>
        pokemon.types.includes(query.toLowerCase())
      );

      console.log(query);

      setFilteredPokemon(filtered);
    }
  };

  return (
    <div>
      <div className="search">
        <SearchBar onSearch={handleSearch} />
        <Filter list={Types} onFilter={handleFilter} />
        {/* <Filter list={Gens} /> */}
      </div>
      <PokemonList pokemons={filteredPokemon} />
      <Load isLoaded={load} />
    </div>
  );
};

export default SearchComponent;
