import Axios from "axios";
import { Type } from "../entities/Type";

export async function getType(typeId: number) {
    if (!typeId) return null;

    const typeResponse = await Axios.get('https://pokeapi.co/api/v2/type/' + typeId);

    const { damage_relations, name } = typeResponse.data;

    return typeResponse.data;
}

export async function getTypes(types?: Type[]) {
    if (!types || types.length === 0) return null;

    const typesData: any[] = []

    types.forEach(async type => {
        const typeResponse = await Axios.get('https://pokeapi.co/api/v2/type/' + type.name);
        const { damage_relations, name } = typeResponse.data;
        typesData.push({ name, damage_relations })
    })
    return typesData;
}