import { Type } from "./Type";

export interface Pokemon {
    id: number,
    name: string;
    frontSpriteUrl: string;
    officialFrontDefault?: string;
    types: Type[];
    weight:69
}