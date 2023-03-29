import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PokemonList } from './features/pokedex-navigation'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import PokedexNavigation from './features/pokedex-navigation/PokedexNavigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import PokemonPage from './features/pokemon-page/PokemonPage'
import TeamBuilderPage from './features/team-builder/TeamBuilderPage'


function App() {

  const queryClient = new QueryClient()

  return (
    <div className="w-full h-screen">
     <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/:pokedexId' element={<PokedexNavigation />} />
          <Route path='/pokemon/:pokemonId' element={<PokemonPage />} />
          <Route path='/team-builder' element={<TeamBuilderPage />} />
        </Route>
      </Routes>

      </Router>

     </QueryClientProvider>
    </div>
  )
}

export default App
