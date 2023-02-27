import { useQuery } from 'react-query';
import { getPokemon } from '../../../services/PokemonService';

export function useGetPokemon(pokemonId: number) {
    const { data: pokemon, isLoading } = useQuery({
        queryKey: ['query-pokemon', pokemonId],
        queryFn: () => getPokemon(pokemonId)
    })
    return {
        pokemon,
        isLoading
    }
}