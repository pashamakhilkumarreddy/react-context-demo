import { memo } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Head = ({ title = "" }) => {
  return (
    <Helmet>
      <title>{`React Hooks Context Demo | ${title}`}</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Head);
