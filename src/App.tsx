import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonList } from './features/pokedex-navigation'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import PokedexNavigation from './features/pokedex-navigation/PokedexNavigation'

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="w-full h-screen">
     <QueryClientProvider client={queryClient}>
        <div className='px-6 py-6'>
          <PokedexNavigation />
        </div>
     </QueryClientProvider>
    </div>
  )
}

export default App
