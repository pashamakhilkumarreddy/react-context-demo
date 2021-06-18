import PropTypes from "prop-types";

const Pokemon = ({ name = "", url = "" }) => {
  return (
    <div className="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen box m-3">
      <div className="content has-text-centered">
        <p className="title is-4 m-2">{name.toUpperCase()}</p>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {`${name.slice(0, 1).toLocaleUpperCase()}${name
            .slice(1)
            .toLocaleLowerCase()}`}{" "}
          API
        </a>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokemon;
