import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import { useNavigate } from "react-router-dom";
import { useGetPokemons } from "./hooks/useGetPokemons";

const PokemonList = ({ pokedex }: { pokedex: number }) => {
  const { pokemons, isLoading } = useGetPokemons(pokedex);
  const navigate = useNavigate();

  const handleCardClick = (pokemonId: number) => {
    navigate(`/pokemon/${pokemonId}`);
  };

  if (isLoading) return <>Loading...</>;
  if (!pokemons || pokemons.length === 0) return <>No pokemon found !</>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-1 py-4 ">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          click={handleCardClick}
        />
      ))}
    </div>
  );
};

export default PokemonList;
