import Filter from "@/components/Filter";
import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Filter />
      <Filter />
      <div className="list">
        <div className="cardBox">
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>{" "}
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
        <div>
          <PokemonCard />
        </div>
      </div>
    </div>
  );
}

// https://pokeapi.co/api/v2/pokemon?limit=60&offset=0
