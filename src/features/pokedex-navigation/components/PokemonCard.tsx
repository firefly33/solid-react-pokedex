import React from 'react'
import { PokemonPreview } from '../../../entities/PokemonPreview';
import TypeTag from './TypeTag'

interface PokemonCardProps {
  pokemon: PokemonPreview;
  alt?: boolean;
}

const PokemonCard = ({ pokemon, alt }: PokemonCardProps) => {
    const { name, frontSpriteUrl, officialFrontDefault, types } = pokemon;

    const isAlt = types.length > 1;
    
    const bgColor = isAlt ? `bg-gradient-to-r from-${types[0].type.name} to-${types[1].type.name}` : `bg-${types[0].type.name}`;

    return (
        <div className={`w-auto flex flex-col justify-between px-4 py-2 rounded-2xl ${bgColor}`}>

          <span className='flex justify-start text-white text-opacity-90 text-2xl capitalize'>{name}</span>

          <div className='flex justify-between gap-2'>
              <div className='flex flex-col align-middle justify-end gap-1'>
                {types.map((type: any) => <TypeTag key={type.type.name} name={type.type.name} />)}
              </div>
              <div className='flex justify-center'>
                  <img src={officialFrontDefault} className="w-[150px]"  />
              </div>
          </div>
        </div>
    )
}

export default PokemonCard