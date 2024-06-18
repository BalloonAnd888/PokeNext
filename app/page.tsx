import Filter from "@/components/Filter";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import { fetchAllPokemon } from "@/utils";
import Link from "next/link";

export default async function Home() {
  const allPokemon = await fetchAllPokemon();

  //console.log(allPokemon);

  return (
    <div>
      <SearchBar />
      <Filter />
      <Filter />
      <div className="list">
        {allPokemon?.map((pokemon: any, index: number) => (
          <Link
            key={index}
            href={{
              pathname: "/pokemon",
              query: {
                pokemon: pokemon.name,
              },
            }}
          >
            <div key={index}>
              <PokemonCard
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  index + 1
                }.png`}
                index={index}
                types={pokemon.types}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// https://pokeapi.co/api/v2/pokemon?limit=60&offset=0
