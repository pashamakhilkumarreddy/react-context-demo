import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [display, setDisplay] = useState(false);
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/" alt="Logo" loading="lazy" decoding="async" />
          </Link>

          <span
            role="button"
            className={`navbar-burger ${display ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={() => setDisplay((display) => !display)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className="navbar-menu" id="mainNavbar">
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/about" className="navbar-item">
              About
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/login" className="button is-info">
                  <strong>Login</strong>
                </Link>
                <Link to="/register" className="button is-info is-light">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
