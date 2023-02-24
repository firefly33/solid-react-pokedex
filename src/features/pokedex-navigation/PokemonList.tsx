import React, { useState } from 'react'
import PokemonCard from './components/PokemonCard';
import { useGetHoennPokemons, useGetPokemons } from './hooks/useGetPokemons'

const PokemonList = ({ pokedex }: { pokedex: number }) => {
  const { pokemons, isLoading } = useGetPokemons(pokedex);

  if (isLoading) return <>Loading...</>
  if(!pokemons || pokemons.length === 0) return <>No pokemon found !</>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-1 py-4 '>
      {pokemons.map(pokemon => (
        <PokemonCard pokemon={pokemon} alt />
      ))}
    </div>
  )
}

export default PokemonList