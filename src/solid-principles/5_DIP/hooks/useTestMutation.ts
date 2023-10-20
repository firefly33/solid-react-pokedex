import React from "react";
import { useMutation } from "react-query";

function testFunctionSearchPokemon(payload: { name: string; type: string }) {
  console.log(payload);
  alert("Pokémon recherché !");
}

function useTestMutation() {
  return useMutation(testFunctionSearchPokemon, {
    mutationKey: "test-search-function",
    retry: false,
    onSuccess: (res: any) => {},
    onError: (error) => {
      console.error(error);
    },
  });
}

export default useTestMutation;
