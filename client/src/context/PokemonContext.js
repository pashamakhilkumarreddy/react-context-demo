import { createContext, useEffect, useReducer } from "react";
import { remove } from "ramda";
import { nanoid } from "nanoid";
import { fetchPokemons } from "../services/pokemon";
import config from "../config";

export const PokemonContext = createContext();

const defaultState = {
  pokemons: [],
  capturedPokemons: [],
};

const PokemonProvider = ({ children }) => {
  const [CAPTURE, RELEASE, ADD_POKEMONS, ADD_POKEMON] = [
    config.CAPTURE,
    config.RELEASE,
    config.ADD_POKEMONS,
    config.ADD_POKEMON,
  ];

  const getPokemonsList = (pokemons, i) => remove(i, 1, pokemons);

  const capturePokemon = (i, state) => ({
    pokemons: getPokemonsList(state.pokemons, i),
    capturedPokemons: [...state.capturedPokemons, state.pokemons[i]],
  });

  const getCapturedPokemons = (capturedPokemons, i) =>
    remove(i, 1, capturedPokemons);

  const releasePokemon = (i, state) => ({
    pokemons: [...state.pokemons, state.capturedPokemons[i]],
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, i),
  });

  const addPokemon = (newPokemon, state) => ({
    ...state,
    pokemons: [newPokemon, ...state.pokemons],
  });

  const addPokemons = (newPokemons, state) => ({
    pokemons: [...newPokemons],
    capturedPokemons: [...state.capturedPokemons],
  });

  const capture = (i) => {
    dispatch({ type: CAPTURE, payload: i });
  };

  const release = (i) => {
    dispatch({ type: RELEASE, payload: i });
  };

  const addNewPokemon = (pokemon) => {
    dispatch({ type: ADD_POKEMON, payload: pokemon });
  };

  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case ADD_POKEMONS:
        const pokemons = action.payload.map((v) => ({
          id: nanoid(),
          ...v,
        }));
        return addPokemons(pokemons, state);
      case ADD_POKEMON:
        return addPokemon(action.payload, state);
      case CAPTURE:
        return capturePokemon(action.payload, state);
      case RELEASE:
        return releasePokemon(action.payload, state);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const { pokemons, capturedPokemons } = state;

  const providerValue = {
    pokemons,
    capturedPokemons,
    release,
    capture,
    addNewPokemon,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPokemons({
          limit: 9,
          offset: 0,
        });
        dispatch({ type: ADD_POKEMONS, payload: data.results });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
