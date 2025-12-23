import PokedexCorpo from "./componets/corpoPokedex"
import PokeImg from "./componets/pokeImg"


function App() {


  return (
    <>
      <PokedexCorpo/>
      <PokeImg  pokemonName={""} pokemonId={0} />
    </>
  )
}

export default App
