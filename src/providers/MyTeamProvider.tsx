import { createContext, useContext, useState } from "react";
import { useQueryClient } from "react-query";
import { Pokemon } from "../entities/Pokemon";
import { PokemonPreview } from "../entities/PokemonPreview";

export interface MyTeamContextType {
  trainerName: string | undefined;
  changeTrainer: (name: string) => void;
  pokemons: PokemonPreview[];
  setPokemons: (pokemon: PokemonPreview[]) => any;
}

export const MyTeamContext = createContext<MyTeamContextType>({
  trainerName: undefined,
  changeTrainer: () => null,
  pokemons: [],
  setPokemons: () => null,
});

export const MyTeamProvider = ({ children }: { children?: any }) => {
  const queryClient = useQueryClient();

  const [trainerName, setTrainerName] = useState<string | undefined>();

  const [pokemons, setPokemons] = useState<PokemonPreview[]>([]);

  const MyTeamProviderProps = {
    trainerName,
    changeTrainer: (name: string) => {
      setTrainerName(name);
    },
    pokemons,
    setPokemons,
  };
  return (
    <MyTeamContext.Provider value={MyTeamProviderProps}>
      {children}
    </MyTeamContext.Provider>
  );
};

export function useMyTeamContext() {
  const context = useContext(MyTeamContext);
  if (context === undefined) throw new Error("Context not inside a provider!");
  return context;
}
