"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SetLoad, Pokemon } from "@/types";
import { fetchPokemons } from "@/utils";
import PokemonCard from "./PokemonCard";

let offset = 60;

const Load = ({ isLoaded }: SetLoad) => {
  const { ref, inView } = useInView();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (inView && isLoaded) {
      fetchPokemons(offset).then((res) => {
        setPokemons([...pokemons, ...res]);
        offset += 60;
      });
    }
  }, [inView, pokemons, isLoaded]);

  return (
    <div>
      {isLoaded && (
        <>
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

          <Image
            ref={ref}
            src={"/tube-spinner.svg"}
            height={50}
            width={50}
            alt="Loading"
            className="m-auto"
          />
        </>
      )}
    </div>
  );
};

export default Load;
