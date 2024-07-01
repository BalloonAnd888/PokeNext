import Image from "next/image";
import { Pokemon } from "@/types";
import { Types } from "@/constants";

const PokemonCard = ({ name, image, id, types }: Pokemon) => {
  return (
    <div className="card">
      <h3 className="text-[30px] font-bold">{id}</h3>

      <Image
        src={image}
        height={150}
        width={150}
        alt="pic"
        className="m-auto"
      />

      <h1 className="text-center text-2xl font-semibold pt-2 capitalize">
        {name}
      </h1>

      <div className="type">
        {types.map((type, index) => (
          <Image
            src={Types[type].icon}
            alt={type}
            width={115}
            height={115}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
