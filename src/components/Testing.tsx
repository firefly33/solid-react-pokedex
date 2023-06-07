import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getAllPokemons } from '../services/PokemonService'

const Testing = () => {
    const [stateTest, setStateTest] = useState('Bonsoir');

    useEffect(() => {
        console.log('booting')
    }, [stateTest])

    function clicked () {
        setStateTest('Test')
    }

    return (
        <div>
            <span>Testing { stateTest }</span>
            <button onClick={clicked}>Modifie la phrase</button>
        </div>
    )
}

export default Testing