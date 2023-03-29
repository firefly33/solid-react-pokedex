import React, { useState } from 'react'
import { useForm, Resolver } from 'react-hook-form';
import PokemonCard from '../pokedex-navigation/components/PokemonCard';
import { useSearchPokemon } from './hooks/useSearchPokemon';

type SearchPokemonFormValues = {
    name: string;
    type: string;
}

const resolver: Resolver<SearchPokemonFormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
    };
  };

const TeamBuilderPage = () => {
    const { getValues, register, handleSubmit, formState: { errors } } = useForm<SearchPokemonFormValues>({ resolver });
    const onSubmit = handleSubmit((data) => refetch());

    const nameField = getValues('name')

    const { pokemons, isLoading, refetch } = useSearchPokemon(nameField);

    return (
        <div className='px-40 py-20 flex flex-col gap-5'>
            <h2 className='flex justify-center'>
                Search a pokémon by...
            </h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-2 px-40">
                        <div className='flex justify-center'>
                            <input
                                className='w-full border-2 rounded-md px-4 py-4'
                                type="text"
                                placeholder='Name'
                                {...register("name")}
                            />
                        {errors?.name && <p>{errors.name.message}</p>}
                        </div>    
                        <div className='flex gap-4'>
                            {/*<input
                                    className='w-full border-2 rounded-md px-4 py-4'
                                    type="text"
                                    placeholder='Type 1'
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.type}
                                    name="type"
                                />
                            <input
                                    className='w-full border-2 rounded-md px-4 py-4'
                                    type="text"
                                    placeholder='Type 2'
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.type}
                                    name="type2"
    /> */}  
                        </div>
                        <button className={`bg-gradient-to-r from-water to-water rounded-md py-4`} type="submit">Add Gobu to your team</button>
                    </form>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-1 py-4 '>
                        {pokemons?.map(pokemon => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} click={handleCardClick} />
                        ))}
                    </div>
        </div>
    )
}

export default TeamBuilderPage