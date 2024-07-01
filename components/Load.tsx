"use client";

import { Pokemon } from "@/types";
import { fetchAllPokemon } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PokemonCard from "./PokemonCard";

let offset = 60;

const Load = () => {
  const { ref, inView } = useInView();
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAllPokemon(offset).then((res) => {
        setAllPokemon([...allPokemon, ...res]);
        offset += 60;
      });
    }
  }, [inView, allPokemon]);

  console.log(allPokemon);

  return (
    <>
      <div className="list">
        {allPokemon?.map((pokemon, index) => (
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
      <div ref={ref}>Load</div>
    </>
  );
};

export default Load;
