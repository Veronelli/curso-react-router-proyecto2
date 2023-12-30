import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import HomePage from ".";
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
