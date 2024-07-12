import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <PokemonCard
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              id={pokemon.id}
              types={pokemon.types}
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
