import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Manifest from "./components/Manifest";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/manifest">
          <Manifest />
        </Route>
        <Redirect to="/manifest" />
      </Switch>
    </Router>
  );
}

export default App;
