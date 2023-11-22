import { ReactNode } from "react";
import Vector from "../../../assets/FrameBall.svg";
import TypeTag from "../../../features/pokedex-navigation/components/TypeTag";
import { TypePreview } from "../../../entities/TypePreview";

// Show always what's happening in the frontend

interface PokemonCardProps {
  id: number;
  types: TypePreview[];
  children: ReactNode;
  click: (pokemonId: number) => void;
}

const PkmnCard = ({ id, types, children, click }: PokemonCardProps) => {
  const isAlt = types.length > 1;

  const bgColor = isAlt
    ? `bg-gradient-to-r from-${types[0].type.name} to-${types[1].type.name}`
    : `bg-${types[0].type.name}`;

  return (
    <div
      className="relative px-4 py-2 rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110"
      onClick={() => click(id)}
    >
      <div className={`absolute inset-0 ${bgColor}`}></div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-no-repeat bg-right-bottom flex flex-col-reverse"
          style={{
            backgroundImage: `url(${Vector})`,
            backgroundSize: "8rem 8rem",
          }}
        ></div>
      </div>

      <div className="relative z-10 ">
        <div className={`w-auto flex flex-col justify-between`}>{children}</div>
      </div>
    </div>
  );
};

const Title = ({ children }: any) => {
  return (
    <h2 className="text-white text-opacity-90 capitalize text-3xl font-medium">
      {children}
    </h2>
  );
};

const Number = ({ id }: { id: number }) => {
  const paddPokemonNumber = (id: number) => {
    return id.toString().padStart(3, "0");
  };

  return (
    <span className="flex justify-start text-black text-opacity-20  font-semibold text-2xl uppercase">
      #{paddPokemonNumber(id)}
    </span>
  );
};

const Types = ({ types }: { types: TypePreview[] }) => {
  return (
    <div className="flex flex-col align-middle justify-end gap-1">
      {types.map((type: any) => (
        <TypeTag key={type.type.name} name={type.type.name} />
      ))}
    </div>
  );
};

const Sprite = ({
  officialFrontDefault,
}: {
  officialFrontDefault: string | undefined;
}) => {
  return (
    <div className="flex justify-center content-end">
      <img src={officialFrontDefault} className="w-[150px]" />
    </div>
  );
};

PkmnCard.Title = Title;
PkmnCard.Number = Number;
PkmnCard.Types = Types;
PkmnCard.Sprite = Sprite;

export default PkmnCard;
