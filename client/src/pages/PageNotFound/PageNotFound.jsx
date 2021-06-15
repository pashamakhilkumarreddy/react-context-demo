import { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="columns is-centered is-vcentered is-mobile mt-6">
      <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd has-text-centered">
        <h1 className="title is-1">Lost in Space?</h1>
        <Link to="/" className="button is-link is-light is-size-5">
          <span className="icon-text is-align-items-center">
            <span className="icon is-medium">
              <FaArrowLeft />
            </span>
            <span>Go back to home!</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default memo(PageNotFound);
