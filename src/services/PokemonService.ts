import { PokemonPreview } from './../entities/PokemonPreview';
import Axios from "axios"

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
        const { id } = pokemonInfoResponse.data;
        const pokemonResponse = await Axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

        const { name, sprites, types } = pokemonResponse.data;
        const frontSpriteUrl = sprites.front_default;
        return { name, frontSpriteUrl, officialFrontDefault: sprites.other['official-artwork'].front_default, types } as PokemonPreview;
        
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