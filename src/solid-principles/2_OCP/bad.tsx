import React from "react";
import { getAllTypes } from "../../constants/Types";
import { useGetPokemons } from "../../features/pokedex-navigation/hooks/useGetPokemons";
import PkmnCard from "./components/PkmnCard";
import TypeTag from "./TypeTag";

function OCP() {
  const { pokemons, isLoading } = useGetPokemons(5);

  if (isLoading)
    return (
      <section className="flex justify-center">Loading pokémons...</section>
    );
  return (
    <section className="px-60">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-1 py-4 ">
        {pokemons?.map((pkmn) => (
          <PkmnCard key={pkmn.id} pokemon={pkmn} click={() => null} />
        ))}
      </section>
    </section>
  );
}

export default OCP;
