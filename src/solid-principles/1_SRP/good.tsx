import TypeSelector from "../../components/TypeSelector";
import { getAllTypes } from "../../constants/Types";
import PokemonCard from "../../features/pokedex-navigation/components/PokemonCard";
import useGetAndFilterPokemons from "./hooks/useGetAndFilterPokemons";

const types = getAllTypes();

function SRP() {
  const { pokemons, handleFilter } = useGetAndFilterPokemons();

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
