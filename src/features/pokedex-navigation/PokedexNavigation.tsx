import React, { useRef, useState } from 'react'
import PokemonList from './PokemonList'
import { useParams, useNavigate } from 'react-router-dom'
import Vector from './../../assets/Vector.svg'

const PokedexNavigation = () => {

    const { pokedexId } = useParams()
    const navigate = useNavigate()


    window.addEventListener('scroll', () => {
        document.body.classList.remove('animate-none');
    });

    const styles = {
        container: {
            backgroundImage: `url(${Vector})`
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/' + e.target.searchDex.value);
    }

    return (
        <div className='px-6 py-6 bg-fixed bg-right-top bg-no-repeat animate-none animate-rotate duration-5000 ease-linear' style={styles.container}>
            <div className='flex flex-col gap-2'>
                <form onSubmit={handleSubmit} className='flex gap-4 self-start sticky'>
                    <input type="text" name="searchDex" className='border-solid border-gray-600 border-2 rounded-lg px-4 py-2' />
                    <button type='submit'>SEARCH</button>
                </form>
                <PokemonList pokedex={Number(pokedexId) || 2} />
            </div>
        </div>
    )
}

export default PokedexNavigation;