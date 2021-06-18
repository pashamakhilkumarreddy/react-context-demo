import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa";

const Pokemon = ({
  id,
  name = "",
  index,
  capture,
  release,
  captured = false,
}) => {
  return (
    <div
      className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen box m-3"
      data-id={id || index}
    >
      <div className="content has-text-centered">
        <p className="title is-4 m-2">{name.toUpperCase()}</p>
        {captured ? (
          <button className="button is-danger" onClick={() => release(index)}>
            <span className="icon">
              <FaMinus />
            </span>
          </button>
        ) : (
          <button className="button is-primary" onClick={() => capture(index)}>
            <span className="icon">
              <FaPlus />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  capture: PropTypes.func,
  release: PropTypes.func,
  captured: PropTypes.bool,
};

export default Pokemon;
