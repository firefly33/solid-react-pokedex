import { useEffect, useState } from "react";
import TypeSelector from "../../components/TypeSelector";
import { getAllTypes } from "../../constants/Types";
import { PokemonPreview } from "../../entities/PokemonPreview";
import { Type } from "../../entities/Type";
import { TypePreview } from "../../entities/TypePreview";
import PokemonCard from "../../features/pokedex-navigation/components/PokemonCard";
import { getHoennPokemons } from "../../services/PokemonService";

const types = getAllTypes();

function SRP() {
  const [pokemons, setPokemons] = useState<PokemonPreview[]>();
  const [typeFilter, setTypeFilter] = useState<Type>();

  function typeIncludes(type: string, types: TypePreview[]) {
    const typeFound = types.find((x) => x.type.name === type);
    return !!typeFound;
  }

  useEffect(() => {
    getHoennPokemons()
      .then((res) => {
        console.log(res);

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

  return (
    <section className="flex flex-col gap-8 px-4 md:px-6 lg:px-52 py-10">
      <TypeSelector types={types} onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 ">
        {pokemons && pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              click={() => null}
            />
          ))
        ) : (
          <div>No pokemons</div>
        )}
      </div>
    </section>
  );
}

export default SRP;
