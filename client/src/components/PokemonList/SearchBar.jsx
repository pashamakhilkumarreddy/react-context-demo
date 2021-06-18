import { FaSort } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchBar = ({
  value,
  handleOnChange,
  showSortIcon = false,
  sortValues,
}) => {
  return (
    <div className="columns is-centered is-vcentered">
      <div
        className="column is-full-mobile is-full-tablet is-6-desktop is-6-widescreen is-6-fullhd has-text-centered
      is-flex is-align-items-center is-justify-content-center"
      >
        <input
          type="search"
          className="input"
          name="searchPokemons"
          value={value}
          placeholder="Search for pokemons"
          onChange={handleOnChange}
        />
        {showSortIcon ? (
          <div className="icon-text is-clickable" onClick={sortValues}>
            <span className="icon is-size-4 is-medium">
              <FaSort />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  showSortIcon: PropTypes.bool,
  sortValues: PropTypes.func,
};

export default SearchBar;
