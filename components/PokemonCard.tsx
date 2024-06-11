import pic from "../test/001.png";
import grass from "../test/Grass.svg";
import poison from "../test/Poison.svg";
import Image from "next/image";

const PokemonCard = () => {
  return (
    <div className="card">
      <h3 className="text-[30px] font-bold">1</h3>

      <Image src={pic} height={150} width={150} alt="pic" className="m-auto" />

      <h1 className="text-center text-2xl font-semibold pt-2">Bulbasaur</h1>

      <div className="type">
        <Image src={grass} width={150} height={150} alt="grass" />
        <Image src={poison} width={150} height={150} alt="grass" />
      </div>
    </div>
  );
};

export default PokemonCard;
