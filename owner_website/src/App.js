import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import OwnerHomePage from "./components/OwnerHomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            strict
            render={() => {
              return <LoginPage />;
            }}
          />{" "}
          <Route
            path="/owner-home"
            exact
            strict
            render={() => {
              return <OwnerHomePage />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
