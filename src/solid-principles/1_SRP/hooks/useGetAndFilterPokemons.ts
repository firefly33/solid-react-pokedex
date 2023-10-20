import React, { useEffect, useState } from 'react'
import { PokemonPreview } from '../../../entities/PokemonPreview';
import { Type } from '../../../entities/Type';
import { TypePreview } from '../../../entities/TypePreview';
import { getHoennPokemons } from '../../../services/PokemonService';

function useGetAndFilterPokemons() {
    const [pokemons, setPokemons] = useState<PokemonPreview[]>();
    const [typeFilter, setTypeFilter] = useState<Type>();
  
    function typeIncludes(type: string, types: TypePreview[]) {
      const typeFound = types.find((x) => x.type.name === type);
      return !!typeFound;
    }
  
    useEffect(() => {
      getHoennPokemons()
        .then((res) => {
          if (typeFilter) {
            const pokemonsFilteredByType = res.filter((x) =>
              typeIncludes(typeFilter?.name, x.types)
            );
            setPokemons(pokemonsFilteredByType);
          } else {
            setPokemons(res);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [typeFilter]);
  
    function handleFilter(type: Type) {
      setTypeFilter((prev) => {
        if (prev === type) return null;
        else return type;
      });
    }

    return { pokemons, setPokemons, typeFilter, setTypeFilter, typeIncludes, handleFilter }
}

export default useGetAndFilterPokemons