"use client";
import Image from "next/image";
import { Types } from "@/constants";
import { DetailProp } from "@/types";

const Detail = ({ details, species }: DetailProp) => {
  const getGenus = () => {
    const genus = species.genera.find((x) => x.language.name === "en");
    if (typeof genus != "undefined") return genus.genus;
  };

  const getFlavorText = () => {
    const text = species.flavor_text_entries[8].flavor_text;
    if (text) return text;
  };

  const playAudio = () => {
    const audio = new Audio(details.cries.latest);
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[40px] capitalize">{details.name}</h1>
        <h2 className="text-[25px]">{getGenus()}</h2>
        <h2 className="text-lg px-8 py-2">{getFlavorText()}</h2>
      </div>

      <div className="detail">
        <div className="py-4">
          <div className="grid grid-cols-2 text-center md:gap-x-[50px] lg:gap-x-[70px]">
            <div className="text-right mr-10">
              <h2>ID </h2>
              <h2>Height </h2>
              <h2>Weight </h2>
              <h2>Abilities</h2>
            </div>

            <div className="text-justify">
              <h2>{details.id}</h2>
              <h2>{details.height / 10}</h2>
              <h2>{details.weight / 10}</h2>

              <div>
                {details.abilities.map((x, index) => (
                  <div className="abilityButton" key={index}>
                    <h2 className="capitalize">{x.ability.name}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button onClick={playAudio} className="audioButton">
              Click Me
              {/* <Image
                src={"/sound-max-svgrepo-com.svg"}
                height={50}
                width={50}
                alt="sound"
              /> */}
            </button>
          </div>
        </div>

        <div className="image">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
            height={150}
            width={150}
            alt={details.name}
            className="m-auto"
          />
          <div className="type">
            {details.types?.map((type, index) => (
              <Image
                src={Types[type.type.name]?.namePlate}
                alt={type.name}
                width={115}
                height={115}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
