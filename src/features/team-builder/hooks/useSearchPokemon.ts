import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { searchPokemon } from "../../../services/PokemonService";

export function useSearchPokemon(pokemonName: string) {

    const { data, isLoading, refetch } = useQuery(["search-pokemon", pokemonName], async () => {
      searchPokemon(pokemonName)
    }, {
      enabled: !(!pokemonName || pokemonName == '')
    });
    console.log(data)
    return { pokemons: data, isLoading, refetch }
}