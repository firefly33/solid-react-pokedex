import React, { useRef, useState } from 'react'
import PokemonList from './PokemonList'

const PokedexNavigation = () => {
    const [pokedexId, setPokedexId] = useState<number>(3);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setPokedexId(e.target.searchDex.value as number);
    }

    return (
        <div className='flex flex-col gap-2'>
            <form onSubmit={handleSubmit} className='flex gap-4'>
                <input type="text" name="searchDex" className='border-solid border-gray-600 border-2 rounded-xl px-4 py-2' />
                <button type='submit'>SEARCH</button>
            </form>
            <PokemonList pokedex={pokedexId} />
        </div>
    )
}

export default PokedexNavigation;