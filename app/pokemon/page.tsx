import { fetcher, fetchPokemonDetails, fetchPokemonSpecies } from "@/utils";
import { log } from "console";

const Pokemon = async ({ searchParams }: any) => {
  const pokemon = searchParams.pokemon;

  const details = await fetchPokemonDetails(pokemon);
  const species = await fetchPokemonSpecies(pokemon);
  const evolution = await fetcher(species.evolution_chain.url);

  // console.log(details);
  // console.log(species);
  // console.log(evolution);

  return (
    <div>
      <h1>{details.name}</h1>
      {details.abilities.map((x: any) => (
        <h2>{x.ability.name}</h2>
      ))}
      <h2>{details.id}</h2>
      <h2>{details.height / 10}</h2>
      <h2>{details.weight / 10}</h2>

      <div>
        <h2>Evolution</h2>
        <p>{evolution?.chain.species.name}</p>
        {evolution?.chain.evolves_to.length !== 0 && (
          <>
            {evolution?.chain.evolves_to.map((s: any) => (
              <p>{s.species.name}</p>
            ))}
          </>
        )}

        {typeof evolution?.chain.evolves_to[0]?.evolves_to !== "undefined" &&
          evolution?.chain.evolves_to[0].evolves_to.length !== 0 && (
            <>
              {evolution?.chain.evolves_to[0].evolves_to.map((s: any) => (
                <p>{s.species.name}</p>
              ))}
            </>
          )}
      </div>
    </div>
  );
};

export default Pokemon;
