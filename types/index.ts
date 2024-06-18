export interface PokemonProps {
  name: string;
  image: string;
  index: number;
  types: [];
}

export interface TypeProps {
  name: string;
  icon: string;
  namePlate: string;
}

export interface PokemonResultProps {
  name: string;
  url: string;
}

export type PokemonTypeDetailsProps = {
  type: {
    name: string;
  };
};

export interface PokemonDetailsProps {
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  };
  types: PokemonTypeDetailsProps[];
}

// export interface PokemonSearchProps {
//   searchParams: PokemonResultProps;
// }
