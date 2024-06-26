import Link from "next/link";
import Filter from "@/components/Filter";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import { Pokemon } from "@/types";
import { fetchAllPokemon } from "@/utils";
import Load from "@/components/Load";

export default async function Home() {
  const allPokemon: Pokemon[] = await fetchAllPokemon(0);

  console.log(allPokemon);

  return (
    <div>
      <SearchBar />
      <Filter />
      <Filter />
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
      <Load />
    </div>
  );
}
