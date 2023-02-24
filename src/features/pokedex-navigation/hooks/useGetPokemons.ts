
import { useQuery }  from "react-query"
import { getAllPokemons, getHoennPokemons } from "../../../services/PokemonService";

export function useGetPokemons(pokedex: number) {
    const { data: pokemons, isLoading } = useQuery({
        queryKey: ['query-pokemons', pokedex],
        queryFn: () => getAllPokemons(pokedex)
    })
    return {
        pokemons,
        isLoading
    }
}

export function useGetHoennPokemons() {
    const { data: pokemons } = useQuery({
        queryKey: 'query-hoenn-pokemons',
        queryFn: () => getHoennPokemons()
    })
    return {pokemons}
}