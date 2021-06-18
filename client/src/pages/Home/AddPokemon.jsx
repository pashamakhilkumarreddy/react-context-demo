import { useContext, useState } from "react";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { PokemonContext } from "../../context/PokemonContext";

const AddPokemon = () => {
  const { addNewPokemon } = useContext(PokemonContext);

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();
      if (name) {
        const pokemon = {
          id: nanoid(),
          name,
        };
        setLoading(true);
        addNewPokemon(pokemon);
        setName("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="columns is-centered is-vcentered is-mobile">
      <div className="column is-11-mobile is-6-tablet is-6-desktop is-6-widescreen is-6-fullhd">
        <form action="" className="form box" onSubmit={handleOnSubmit}>
          <div className="field">
            <label htmlFor="#name" className="label">
              Name
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                placeholder="Please enter the pokemon name"
                required
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="field has-text-centered">
            <div className="control">
              <button
                className={clsx("button", "is-primary", {
                  "is-loading": loading,
                })}
              >
                <span>Add Pokemon</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPokemon;
