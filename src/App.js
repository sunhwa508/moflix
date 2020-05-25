import React from "react";
import "./App.css";
import Home from "./pages/home/home";

import { Route, Switch } from "react-router-dom";
import MovieDetail from "./components/moviedetail/movieDetail";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/moflix/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
