import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import { fetchPokemonDetails } from "@/utils";
import { Types } from "@/constants";

const EvolutionList = async ({ name, type }: any) => {
  const pokemon = await fetchPokemonDetails(name);

  return (
    <MotionDiv
      whileHover={{
        scale: 1.15,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div className="evolutionList">
        <Link
          href={{
            pathname: "/pokemon",
            query: {
              pokemon: pokemon.name,
            },
          }}
        >
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
        </Link>
      </div>
    </MotionDiv>
  );
};

export default EvolutionList;
