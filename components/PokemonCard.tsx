"use client";

import Image from "next/image";
import { PokemonProps } from "@/types";
import { Types } from "@/constants";

const PokemonCard = ({ name, image, index, types }: PokemonProps) => {
  return (
    <div className="card">
      <h3 className="text-[30px] font-bold">{index + 1}</h3>

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
        {types?.map((type) => (
          <Image
            src={Types[type]?.icon || ""}
            alt={type}
            width={115}
            height={115}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
