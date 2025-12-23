import { useState } from "react";
import PokedexCorpo from "./componets/corpoPokedex"
import PokeImg from "./componets/pokeImg"
import PokeLista from "./componets/PokeLista"
import { ContainerCentralizer } from "./GlobalStyled"


function App() {
const [pokemonId, setPokemonId] = useState(1);

const handleNextPokemon = () => {
    setPokemonId((prev) => prev + 1);
};

const handlePrevPokemon = () => {
    setPokemonId((prev) => (prev > 1 ? prev - 1 : 1));
};

  return (
    <>
      <PokedexCorpo />
      <ContainerCentralizer>
          <PokeImg onNextPokemon={handleNextPokemon}
          onPrevPokemon={handlePrevPokemon}
          pokemonName={""}
          pokemonId={pokemonId} />
          <PokeLista onSelectPokemon={setPokemonId} />
      </ContainerCentralizer>
      </>
      )
}

      export default App
