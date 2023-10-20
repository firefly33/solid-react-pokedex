import React from "react";
import { PokemonPreview } from "../../../entities/PokemonPreview";
import TypeTag from "./TypeTag";
import Vector from "../../../assets/FrameBall.svg";

interface PokemonCardProps {
  pokemon: PokemonPreview;
  click: (pokemonId: number) => void;
}

const PokemonCard = ({ pokemon, click }: PokemonCardProps) => {
  const { id, name, frontSpriteUrl, officialFrontDefault, types } = pokemon;

  const isAlt = types.length > 1;

  const bgColor = isAlt
    ? `bg-gradient-to-r from-${types[0].type.name} to-${types[1].type.name}`
    : `bg-${types[0].type.name}`;

  const paddPokemonNumber = (id: number) => {
    return id.toString().padStart(3, "0");
  };

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
        <div className={`w-auto flex flex-col justify-between`}>
          <div className="flex justify-between gap-2">
            <h2 className="flex justify-start text-white text-opacity-90 capitalize text-3xl font-medium">
              {name}
            </h2>
            <span className="flex justify-start text-black text-opacity-20  font-semibold text-2xl uppercase">
              #{paddPokemonNumber(pokemon.id)}
            </span>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex flex-col align-middle justify-end gap-1">
              {types.map((type: any) => (
                <TypeTag key={type.type.name} name={type.type.name} />
              ))}
            </div>
            <div className="flex justify-center content-end">
              <img src={officialFrontDefault} className="w-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`w-auto flex flex-col justify-between px-4 py-2 rounded-2xl ${bgColor}`}
      style={{ backgroundImage: 'url("../../../assets/Vector.svg")' }}
    >
      <span className="flex justify-start text-white text-opacity-90 text-2xl capitalize">
        {name}
      </span>

      <div className="flex justify-between gap-2">
        <div className="flex flex-col align-middle justify-end gap-1">
          {types.map((type: any) => (
            <TypeTag key={type.type.name} name={type.type.name} />
          ))}
        </div>
        <div className="flex justify-center">
          <img src={officialFrontDefault} className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
