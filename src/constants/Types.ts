import { Type } from "../entities/Type";

export enum TYPES {
  NORMAL = "normal",
  FIRE = "fire",
  //"fire-dark"= "",
  //"fire-light"= "",
  WATER = "water",
  ELECTRIC = "electric",
  GRASS = "grass",
  // "grass-dark"= "",
  // "grass-light"= "#A7DB8D",
  ICE = "ice",
  FIGHTING = "fighting",
  POISON = "poison",
  GROUND = "ground",
  FLYING = "flying",
  PSYCHIC = "psychic",
  BUG = "bug",
  ROCK = "rock",
  GHOST = "ghost",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}

export function getAllTypes() {
  return Object.values(TYPES).map((x) => {
    return { name: x } as Type;
  });
}
