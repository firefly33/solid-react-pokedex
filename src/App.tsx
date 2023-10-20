import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import PokedexNavigation from "./features/pokedex-navigation/PokedexNavigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PokemonPage from "./features/pokemon-page/PokemonPage";
import TeamBuilderPage from "./features/team-builder/TeamBuilderPage";

import { ReactQueryDevtools } from "react-query/devtools";
import Testing from "./components/Testing";
import SRP from "./solid-principles/1_SRP/good";
import OCP from "./solid-principles/2_OCP/good";
import LSP from "./solid-principles/3_LSP/bad";
import ISP from "./solid-principles/4_ISP/bad";
import DIP from "./solid-principles/5_DIP/bad";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="w-full h-screen">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index={true} element={<Testing />} />
              <Route path="/:pokedexId" element={<PokedexNavigation />} />
              <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
              <Route path="/team-builder" element={<TeamBuilderPage />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/srp" element={<SRP />} />
              <Route path="/ocp" element={<OCP />} />
              <Route path="/lsp" element={<LSP />} />
              <Route path="/isp" element={<ISP />} />
              <Route path="/dip" element={<DIP />} />
            </Route>
          </Routes>
        </Router>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
