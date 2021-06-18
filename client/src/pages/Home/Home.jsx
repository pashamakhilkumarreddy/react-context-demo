import { memo } from "react";
import PokemonList from "./PokemonList";
import PokemonProvider from "../../context/PokemonContext";
import Head from "../../components/Head";
import CapturedPokemons from "./CapturedPokemons";
import AddPokemon from "./AddPokemon";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <PokemonProvider>
        <AddPokemon />
        <PokemonList />
        <hr />
        <CapturedPokemons />
      </PokemonProvider>
    </>
  );
};

export default memo(Home);
