import { useContext } from "react";
import Pokemon from "./Pokemon";
import { PokemonContext } from "../../context/PokemonContext";

const PokemonsList = () => {
  const { pokemons, capture } = useContext(PokemonContext);
  return (
    <div className="columns is-centered is-vcentered is-multiline">
      <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
        <h2 className="title is-1 has-text-centered mt-3">Pokemons List</h2>
      </div>
      {pokemons && pokemons.length ? (
        pokemons.map((pokemon, i) => (
          <Pokemon
            key={`${pokemon.name}-${i}`}
            {...pokemon}
            index={i}
            capture={capture}
          />
        ))
      ) : (
        <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
          <h2 className="title is-3 has-text-centered mt-3 has-text-info is-unselectable">
            No Pokemons Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default PokemonsList;
