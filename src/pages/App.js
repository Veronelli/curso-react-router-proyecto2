import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import HomePage from ".";
import { createMemoryHistory } from "history";
import CreatePage from "./create";
import EditPage from "./edit";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  const history = createMemoryHistory();
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/edit">
          <EditPage />
        </Route>
        <Route exact path="/" >
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
export default App;
