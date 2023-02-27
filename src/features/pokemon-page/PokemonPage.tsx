import { Pokemon } from "../../entities/Pokemon"
import { useParams, useNavigate } from 'react-router-dom'
import { useGetPokemon } from "./hooks/useGetPokemon"

const PokemonPage = () => {

    const params = useParams()
    const navigate = useNavigate()

    const { pokemon, isLoading } = useGetPokemon(Number(params?.pokemonId) ?? 0)

    const changePokemon = () => {
        if (!pokemon) return
        const newPokemonId = pokemon.id + 1
        navigate('/pokemon/' + newPokemonId)
    }

    if (isLoading) return <>Loading your pokémon...</>
    if (!pokemon) return <>No pokémon found...</>

    const { id, name, frontSpriteUrl, officialFrontDefault, types } = pokemon;

    const isAlt = types.length > 1;
    
    console.log(pokemon)
    const bgColor = isAlt ? `bg-gradient-to-t from-${types[0].name} to-${types[1].name}` : `bg-${types[0].name}`;

    return (
        <div className={`w-full h-full py-6 ${bgColor} grid grid-cols-4 text-white`}>
            <div className=""></div>
            <div className="col-start-2 col-span-2 flex flex-col gap-4">
                <section className="flex justify-between">
                    <input type="text" placeholder="Search here" />
                    <button type="button">Filter</button>
                </section>
                <section className="flex justify-end">Pokémons</section>

                <section className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="uppercase">{ types[0].name }</div>
                        <div className="capitalize text-6xl">{ name }</div>
                        <div className="flex flex-col gap-1">
                           <div className="flex justify-between">
                                <span>Height</span>
                                <span>150M</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Weight</span>
                                <span>150KG</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Abilities</span>
                                <span>Overgrow</span>
                            </div>
                        </div>
                    </div>
                    <img src={officialFrontDefault} />
                </section>

                <section>Stats</section>
            </div>
            <div className="flex items-center justify-center">
                <button type="button" onClick={changePokemon}>{">"}</button>
            </div>
        </div>
    )
}

export default PokemonPage