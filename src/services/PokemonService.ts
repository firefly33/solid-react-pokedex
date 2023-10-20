import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
import { PokemonPreview } from './../entities/PokemonPreview';
import Axios from "axios"
import { Pokemon } from '../entities/Pokemon';
import { Type } from '../entities/Type';

interface PokemonSpecie {
    name: string;
    url: string;
}
interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonSpecie
}

export async function getAllPokemons (pokedex?: number) {
    if (!pokedex) return [];

    const response = await Axios.get('https://pokeapi.co/api/v2/pokedex/' + pokedex);
    const pokemonData = response.data.pokemon_entries as PokemonEntry[];
    const pokemonInfoPromises = pokemonData.map(async (entry: PokemonEntry) => {
        const { name: speciesName, url } = entry.pokemon_species;
        const pokemonInfoResponse = await Axios.get(url);
        const { id : pkmonId} = pokemonInfoResponse.data;
        const pokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + pkmonId);

        const { id, name, sprites, types } = pokemonResponse.data;
        const frontSpriteUrl = sprites.front_default;
        return { id, name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
        
    });
    const pokemonInfo: PokemonPreview[] = await Promise.all(pokemonInfoPromises);
    return pokemonInfo;
}

export async function getHoennPokemons() {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokedex/4');
    const pokemonData = response.data.pokemon_entries as PokemonEntry[];
    const pokemonInfoPromises = pokemonData.map(async (entry: PokemonEntry) => {
        const { name: speciesName, url } = entry.pokemon_species;
        if (speciesName === 'deoxys') return handleDeoxysSpecies(url)

        const pokemonInfoResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + speciesName);
        const { id, name, sprites, types } = pokemonInfoResponse.data;
        const frontSpriteUrl = sprites.front_default;
        return { id, name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
    });
    const pokemonInfo: PokemonPreview[] = await Promise.all(pokemonInfoPromises);
    return pokemonInfo;
}

async function handleDeoxysSpecies(url: string) {
    const deoxysInfoResponse = await Axios.get(url);
    const { id } = deoxysInfoResponse.data;
    const deoxysPokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

    const { name, sprites, types } = deoxysPokemonResponse.data;
    const frontSpriteUrl = sprites.front_default;
    return { id, name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
}

export async function getPokemon(pokemonId: number) {
    if (!pokemonId) return null;
    const pokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);

    const { id, name, sprites, types, stats } = pokemonResponse.data;
    const frontSpriteUrl = sprites.front_default;
    const typesMapped: Type[] = types.map((type: any) => {
        return { name: type.type.name } as Type
    })
    return {
        id,
        name,
        frontSpriteUrl,
        officialFrontDefault: sprites.other['official-artwork'].front_default,
        types: typesMapped,
        stats
    } as Pokemon;
}

export async function searchPokemon(pokemonName: string) {
    if (!pokemonName || pokemonName === '') return []

    const API_URL = `https://beta.pokeapi.co/graphql/v1beta`;

    const graphQLClient = new GraphQLClient(API_URL, {
    //headers: {
    //  Authorization: `Bearer ${process.env.API_KEY}`
    }
    );

    const graphQLVariable: string = pokemonName + '%';
    const { pokemon_v2_pokemon } = await graphQLClient.request(
    gql`
        query searchPokemon($pokemonName: String!) {
            pokemon_v2_pokemon(where: {name: {_ilike: $pokemonName}}) {
                name
                id
                weight
                pokemon_v2_pokemonsprites {
                  sprites
                }
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                    name
                  }
                }
            }
          }
    `,
    { pokemonName: graphQLVariable }
    ) as { pokemon_v2_pokemon: any };
    const pokemonsFound: Pokemon[] = pokemon_v2_pokemon.map((entry: any) => {
        debugger
        const sprites: any = JSON.parse(entry.pokemon_v2_pokemonsprites[0].sprites)

        return {
            id: entry.id as number,
            name: entry.name as string,
            weight: entry.weight as number,
            types: entry.pokemon_v2_pokemontypes.map((type: any) => {
                return { name: type.pokemon_v2_type.name }
            }) as Type[],
            frontSpriteUrl: sprites.front_default,
            officialFrontDefault: sprites.other['official-artwork'].front_default
        } as Pokemon
    }) 
    console.log(pokemonsFound)
    return pokemonsFound;
}