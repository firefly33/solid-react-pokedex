import H2 from "../../components/shared/H2";
import { TypePreview } from "../../entities/TypePreview";

// Speak only about PokemonImage

interface PokemonImageProps {
  readonly imageUrl?: string;
}

function PokemonImage({ imageUrl }: PokemonImageProps) {
  return <img className="w-20" src={imageUrl} />;
}

export interface PokemonPreviewCardProps {
  readonly name: string;
  readonly sprite: string | undefined;
  readonly types: TypePreview[];
}

function PokemonPreviewCard(props: PokemonPreviewCardProps) {
  const { name, sprite, types } = props;

  const isAlt = types.length > 1;

  const bgColor = isAlt
    ? `bg-gradient-to-r from-${types[0].type.name} to-${types[1].type.name}`
    : `bg-${types[0].type.name}`;

  return (
    <div
      className={`px-4 py-2 w-80 rounded-2xl flex flex-col gap-2 items-center ${bgColor} `}
    >
      <PokemonImage imageUrl={sprite} />
      <H2 className="text-white">{name}</H2>
    </div>
  );
}

export default PokemonPreviewCard;
