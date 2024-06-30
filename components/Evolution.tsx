import EvolutionList from "./EvolutionList";
import Arrow from "./Arrow";
import { EvolutionProp } from "@/types";

const Evolution = ({ evolution, details }: EvolutionProp) => {
  return (
    <div>
      <h2 className="text-center text-[40px] pt-4">Evolution</h2>

      <div className="evolution">
        <div>
          <EvolutionList
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`}
            id={details.id}
            name={evolution?.chain.species.name}
            type={details.types}
          />
        </div>

        <div>
          {evolution?.chain.evolves_to.length !== 0 && (
            <>
              {evolution?.chain.evolves_to.map((s, index) => (
                <div key={index} className="arrow">
                  <Arrow level={s.evolution_details[0].min_level} />
                  <EvolutionList name={s.species.name} />
                </div>
              ))}
            </>
          )}
        </div>

        <div>
          {typeof evolution?.chain.evolves_to[0]?.evolves_to !== "undefined" &&
            evolution?.chain.evolves_to[0].evolves_to.length !== 0 && (
              <>
                {evolution?.chain.evolves_to[0].evolves_to.map((s, index) => (
                  <div key={index} className="arrow">
                    <Arrow level={s.evolution_details[0].min_level} />
                    <EvolutionList name={s.species.name} />
                  </div>
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Evolution;
