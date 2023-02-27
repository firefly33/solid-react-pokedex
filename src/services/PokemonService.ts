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
        if (speciesName === 'deoxys') {
            const deoxysInfoResponse = await Axios.get(url);
            const { id } = deoxysInfoResponse.data;
            const deoxysPokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

            const { name, sprites, types } = deoxysPokemonResponse.data;
            const frontSpriteUrl = sprites.front_default;
            return { name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
        }
        const pokemonInfoResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + speciesName);
        const { name, sprites, types } = pokemonInfoResponse.data;
        const frontSpriteUrl = sprites.front_default;
        return { name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
    });
    const pokemonInfo: PokemonPreview[] = await Promise.all(pokemonInfoPromises);
    return pokemonInfo;
}

export async function getPokemon(pokemonId: number) {
    if (!pokemonId) return null;
    const pokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId);

    const { id, name, sprites, types } = pokemonResponse.data;
    const frontSpriteUrl = sprites.front_default;
    debugger
    const typesMapped: Type[] = types.map((type: any) => {
        return { name: type.type.name } as Type
    })
    return {
        id,
        name,
        frontSpriteUrl,
        officialFrontDefault: sprites.other['official-artwork'].front_default,
        types: typesMapped
    } as Pokemon;
}