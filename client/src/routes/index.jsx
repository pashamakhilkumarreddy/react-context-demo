import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ErrorBoundary from "../components/ErrorBoundary";
import Loader from "../components/Loader";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Pokemons = lazy(() => import("../pages/Pokemons"));

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact>
          <Home />
        </Route>
        <Route path="/pokemons" exact>
          <Pokemons />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ErrorBoundary>
  </Suspense>
);

export default Routes;
