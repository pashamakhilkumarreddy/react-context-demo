import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Pokemon from "./Pokemon";

const CapturedPokemons = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="columns is-centered is-vcentered is-multiline">
      <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
        <h2 className="title is-1 has-text-centered mt-3">
          Captured Pokemons List
        </h2>
      </div>
      {capturedPokemons && capturedPokemons.length ? (
        capturedPokemons.map((pokemon, i) => (
          <Pokemon
            key={`${pokemon.name}-${i}`}
            {...pokemon}
            index={i}
            release={release}
            captured={true}
          />
        ))
      ) : (
        <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
          <h2 className="title is-3 has-text-centered mt-3 has-text-info is-unselectable">
            No Captured Pokemons Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default CapturedPokemons;
