import { memo } from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader"></div>
    </div>
  );
};

export default memo(Loader);
