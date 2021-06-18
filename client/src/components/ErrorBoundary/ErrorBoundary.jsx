import { Component, memo } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(err) {
    console.error(err);
    return {
      hasError: true,
    };
  }

  componentDidCatch = (err, errInfo) => {
    console.error(err, errInfo);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

const ErrorPage = memo(() => {
  return (
    <div className="columns is-centered is-vcentered is-mobile">
      <div className="column is-12-mobile has-text-centered">
        <h2 className="title is-1 ">
          Oops! Looks like it is something from our side
        </h2>
      </div>
    </div>
  );
});
