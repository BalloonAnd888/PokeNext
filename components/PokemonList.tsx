import Link from "next/link";
import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemons } from "@/types";

const PokemonList = ({ pokemons }: Pokemons) => {
  return (
    <div className="list">
      {pokemons?.map((pokemon, index) => (
        <Link
          key={index}
          href={{
            pathname: "/pokemon",
            query: {
              pokemon: pokemon.name,
            },
          }}
        >
          <div>
            <PokemonCard
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              id={pokemon.id}
              types={pokemon.types}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
