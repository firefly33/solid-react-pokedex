import { Pokemon } from "../../entities/Pokemon"
import { useParams, useNavigate } from 'react-router-dom'
import { useGetPokemon } from "./hooks/useGetPokemon"
import StatLine from "./components/StatLine"
import { useQuery } from "react-query"
import { getTypes } from "../../services/TypeService"
import NormalIcon from "../../assets/types/normal_icon.png";

const PokemonPage = () => {

    const params = useParams()
    const navigate = useNavigate()

    const { pokemon, isLoading } = useGetPokemon(Number(params?.pokemonId) ?? 0)

    const { data: typesData, isLoading: isLoadingTypes } = useQuery({
        queryKey: 'query-pokemon-types',
        queryFn: () => getTypes(pokemon?.types)
    })
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
    const bgColorGradientHorizontal = isAlt ? `bg-gradient-to-r from-${types[0].name} to-${types[1].name}` : `bg-${types[0].name}`;
    const textColorGradient = isAlt
        ? `font-bold text-transparent bg-clip-text bg-gradient-to-r from-${types[0].name} to-${types[1].name}`
        : `font-bold text-transparent bg-clip-text bg-${types[0].name}`

    return (
        <div className={`w-full h-full ${bgColorGradientHorizontal} flex flex-col`}>
            <div className="h-full relative top-[10%]">
            <section className="w-full bg-white rounded-t-2xl relative top-[40%] flex flex-col gap-4">
                <section className="flex justify-center">
                    <img src={officialFrontDefault} className="w-[50%] mt-[-100px]" />
                </section>
                <section className="flex justify-center text-bold text-3xl capitalize text-gray-600">
                    { name }
                </section>
                <section className="flex justify-center gap-2 text-bold text-xl capitalize text-gray-600">
                    {types.map(type => (
                        <div className={`flex items-center gap-1 ${bgColor} shadow-xl shadow-${bgColorGradientHorizontal} rounded-full text-white px-4 py-1`}>
                            <img className="w-10" src={NormalIcon}/>
                            <span>{type.name}</span>
                        </div>
                    ))}
                </section>
                <section className="flex justify-center text-sm">
                    <p>Description of the pokémon</p>
                </section>
                <section className="flex justify-center gap-2">
                    <button className={`text-white ${bgColorGradientHorizontal} shadow-xl shadow-${bgColorGradientHorizontal} rounded-full shadow-xl px-2 py-1 text-sm`}>STATS</button>
                    <button className={`${textColorGradient} rounded-full text-sm`}>EVOLUTIONS</button>
                    <button className={`${textColorGradient} rounded-full text-sm`}>STATS</button>
                </section>
                <section className="grid grid-cols-12 px-20">
                    {pokemon.stats?.map(stat => (
                        <StatLine label={stat?.stat?.name} value={stat?.base_stat} textColorGradient={bgColorGradientHorizontal} />
                    ))}
                </section>
                <section className="flex flex-col items-center">
                    <h2 className={`${textColorGradient}`}>Weaknesses</h2>
                    <div>
                        types list
                    </div>
                </section>
                <section className="flex flex-col items-center">
                    <h2 className={`${textColorGradient}`}>Habilities</h2>
                    <div>
                        Habilities list
                    </div>
                </section>
            </section>
            </div>
            
        </div>
    )

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