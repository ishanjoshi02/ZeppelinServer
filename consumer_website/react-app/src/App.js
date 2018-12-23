import React, { Component } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ConsumerRegisterPage from "./components/ConsumerRegisterPage";
import ConsumerHomePage from "./components/ConsumerHomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, NavLink, Redirect } from "react-router-dom";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
  }

  state = {
    loggedIn: true,
    customers: []
  };

  handleLogIn() {
    this.setState({ loggedIn: true });
  }

  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, console.log("Fetched...", customers))
      );
  }

  render() {
    console.log(this.state.loggedIn);
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
          />

          {/* <Button onClick={this.handleLogIn}>test</Button> */}

          <Route
            path="/consumer-register"
            exact
            strict
            render={() => {
              return <ConsumerRegisterPage />;
            }}
          />

          <Route
            path="/consumer-home"
            exact
            strict
            render={() => {
              return <ConsumerHomePage />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
