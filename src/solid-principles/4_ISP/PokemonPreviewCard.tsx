import H2 from "../../components/shared/H2";
import { PokemonPreview } from "../../entities/PokemonPreview";

export interface PokemonPreviewCardProps {
  pokemon: PokemonPreview;
}

function PokemonImage({ pokemon }: { pokemon: PokemonPreview }) {
  return <img className="w-20" src={pokemon.officialFrontDefault} />
}

function PokemonPreviewCard(props: PokemonPreviewCardProps) {
  const { pokemon } = props;

  const isAlt = pokemon.types.length > 1;

  const bgColor = isAlt
    ? `bg-gradient-to-r from-${pokemon.types[0].type.name} to-${pokemon.types[1].type.name}`
    : `bg-${pokemon.types[0].type.name}`;

  return (
    <div
      className={`px-4 py-2 w-80 rounded-2xl flex flex-col gap-2 items-center ${bgColor} `}
    >
      <PokemonImage pokemon={pokemon} />
      <H2 className="text-white">{pokemon.name}</H2>
    </div>
  );
}

export default PokemonPreviewCard;
