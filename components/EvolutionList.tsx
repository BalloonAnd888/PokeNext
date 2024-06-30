import Image from "next/image";
import { fetchPokemonDetails } from "@/utils";
import { Types } from "@/constants";

const EvolutionList = async ({ name, type }: any) => {
  const pokemon = await fetchPokemonDetails(name);
  console.log(pokemon);
  console.log(pokemon.name);

  return (
    <div className="evolutionList p-4">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        height={150}
        width={150}
        alt="pokemon"
        className="m-auto"
      />
      <p className="text-center">#{pokemon.id}</p>
      <p className="capitalize text-center">{name}</p>
      <div className="type">
        {pokemon.types.map((t: any, index: number) => (
          <Image
            src={Types[t.type.name]?.icon}
            alt={type}
            width={50}
            height={50}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EvolutionList;
