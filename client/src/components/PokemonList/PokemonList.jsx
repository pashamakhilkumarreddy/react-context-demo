import { useEffect, useState } from "react";
import { filter, sort } from "ramda";
import clsx from "clsx";
import config from "../../config";
import { fetchPokemons } from "../../services/pokemon";
import SearchBar from "./SearchBar";
import Pokemon from "./Pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [sortKey, setSortKey] = useState(config.SORT_TYPES.DEFAULT);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const getPokemons = async () => {
    try {
      setLoading(true);
      const data = await fetchPokemons({
        offset,
        limit,
      });
      if (!data.next) {
        setDisabled(true);
        return;
      }
      setPokemons([
        ...pokemons,
        ...(data.results && data.next ? data.results : []),
      ]);
      setOffset((offset) => offset + 20);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
    filterPokemons();
  };

  const loadMore = () => {
    getPokemons();
  };

  const filterPokemons = () => {
    const matches = filter(
      (pokemon) => pokemon.name.includes(searchVal),
      pokemons
    );
    if (searchVal.trim()) {
      setFilteredPokemons(matches);
    } else {
      setFilteredPokemons([]);
    }
  };

  const handleSort = () => {
    const { ASCENDING, DESCENDING, DEFAULT } = config.SORT_TYPES;
    const sortType =
      sortKey === DEFAULT || sortKey === DESCENDING ? ASCENDING : DESCENDING;
    setSortKey(sortType);
    if (filteredPokemons.length) {
      sortPokemons(sortType, filteredPokemons, setFilteredPokemons);
    } else {
      sortPokemons(sortType, pokemons, setPokemons);
    }
  };

  const sortPokemons = (sortType, data, setFunc) => {
    const { ASCENDING, DESCENDING } = config.SORT_TYPES;
    switch (sortType) {
      case ASCENDING:
        const sortedAscValues = sort(
          (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
          data
        );
        setFunc(sortedAscValues);
        break;
      case DESCENDING:
        const sortedDescValues = sort(
          (a, b) => -a.name.toLowerCase().localeCompare(b.name),
          data
        );
        setFunc(sortedDescValues);
        break;
      default:
        setFunc(data);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <SearchBar
        value={searchVal}
        handleOnChange={handleOnChange}
        showSortIcon={true}
        sortValues={handleSort}
      />
      <div className="columns is-centered is-vcentered is-multiline">
        {pokemons && pokemons.length ? (
          (filteredPokemons && filteredPokemons.length
            ? filteredPokemons
            : pokemons
          ).map((pokemon, i) => <Pokemon key={i} {...pokemon} />)
        ) : (
          <h2 className="title is-2 my-5">No Pokemons found!</h2>
        )}
      </div>

      <div className="columns is-centered is-vcentered">
        <div className="column is-full-mobile is-6-tablet is-6-desktop is-4-widescreen is-4-fullhd has-text-centered">
          <button
            className={clsx("button", "is-info", "is-medium", {
              "is-loading": loading,
            })}
            onClick={loadMore}
            disabled={disabled}
          >
            <span>Load more Pokemons!</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
