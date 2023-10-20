import { useGetPokemons } from "../../features/pokedex-navigation/hooks/useGetPokemons";
import PokemonPreviewCard from "./PokemonPreviewCard";

function ISP() {
  const { pokemons, isLoading } = useGetPokemons(5);

  if (isLoading) {
    return (
      <section className="h-screen flex flex-col gap-4 justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
        <span>Loading pokémons...</span>
      </section>
    );
  }
  return (
    <section className="px-32 py-9 flex flex-col gap-4 items-center justify-center">
      {pokemons?.map((pkmn) => (
        <PokemonPreviewCard key={pkmn.id} pokemon={pkmn} />
      ))}
    </section>
  );
}

export default ISP;
