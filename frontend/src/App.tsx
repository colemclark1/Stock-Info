import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Profile from "./pages/Profile";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/profile">
          <Profile id={1} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
