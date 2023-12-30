import React from "react";
import { Switch, Router, Route } from "react-router";
import HomePage from ".";
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
        <Switch>
          <Route path="/" element={<Home />}/>
        </Switch>
    </Router>
  );
}
const Home = () => {
  return <div style={{background: "red",width:"100px", height:"100px"}}>Home Page</div>;
};

export default App;
