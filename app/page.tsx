import { Pokemon } from "@/types";
import { fetchAllPokemon, fetchPokemons } from "@/utils";
import SearchComponent from "@/components/SearchComponent";

export default async function Home() {
  const pokemons: Pokemon[] = await fetchPokemons(0);
  const allPokemon: Pokemon[] = await fetchAllPokemon();

  // console.log(pokemons);
  // console.log(allPokemon);

  return (
    <div>
      <SearchComponent pokemons={pokemons} allPokemon={allPokemon} />
    </div>
  );
}
