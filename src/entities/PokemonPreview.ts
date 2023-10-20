import { TypePreview } from "./TypePreview";

export interface PokemonPreview {
    id: number,
    name: string;
    frontSpriteUrl: string;
    officialFrontDefault?: string;
    types: TypePreview[];
}