import { memo } from "react";

const Home = () => {
  return (
    <div className="columns is-centered is-vcentered is-mobile">
      <div className="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
        <h1 className="title is-1">Home</h1>
      </div>
    </div>
  );
};

export default memo(Home);
