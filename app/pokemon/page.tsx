import Detail from "@/components/Detail";
import Evolution from "@/components/Evolution";
import { PokemonDetails, PokemonEvolution, PokemonSpecies } from "@/types";
import { fetcher, fetchPokemonDetails, fetchPokemonSpecies } from "@/utils";

const Pokemon = async ({ searchParams }: any) => {
  const pokemon = searchParams.pokemon;

  const details: PokemonDetails = await fetchPokemonDetails(pokemon);
  const species: PokemonSpecies = await fetchPokemonSpecies(pokemon);
  const evolution: PokemonEvolution = await fetcher(
    species.evolution_chain.url
  );

  // console.log(details);
  // console.log(species);
  // console.log(evolution);

  return (
    <div>
      <Detail details={details} species={species} />
      <Evolution evolution={evolution} details={details} />
    </div>
  );
};

export default Pokemon;
