import { memo } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="title is-5">&copy; 2021 React Hooks Context Demo</p>
      </div>
    </footer>
  );
};

export default memo(Footer);
