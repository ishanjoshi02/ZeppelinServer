import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: "",
      password: ""
    };
  }

  handleEmailChange = e => {
    this.setState({ uniqueId: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleLogIn = e => {
    e.preventDefault();
    console.log(this.state);
    const { uniqueId, password } = this.state;
    // axios.post("/signIn", this.state).then(res => console.log(res));
    // axios({
    //   method: "post",
    //   url: "localhost:5000/signIn",
    //   data: { uniqueId: uniqueId, password: password },
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Cache-Control": "no-cache",
    //     "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
    //   }
    // }).then(res => console.log(res));
    fetch("http://localhost:5000/signIn", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res));
  };

  render() {
    return (
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        margin={40}
        width={350}
        background={"tint2"}
        elevation={2}
      >
        <form>
          <Heading size={700} margin={20}>
            OWNER LOGIN
          </Heading>
          <div>
            <label htmlFor="email">Unique ID</label>
            <TextInput
              name="uniqueId"
              placeholder="jhon.doe@xyz.com"
              onChange={e => {
                this.handleEmailChange(e);
              }}
              margin={20}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <TextInput
              name="password"
              type="password"
              placeholder="**********"
              onChange={e => {
                this.handlePasswordChange(e);
              }}
              margin={20}
            />
          </div>

          <Pane display="flex" alignItems="center" justifyContent="center">
            {/* <Link to="/owner-home"> */}
            <Button
              appearance="primary"
              intent="success"
              margin={20}
              onClick={this.handleLogIn}
            >
              LOGIN
            </Button>
            {/* </Link> */}
            {/* <Link to="/owner-register"> */}
            <Button appearance="primary" type="submit" margin={20}>
              REGISTER
            </Button>
            {/* </Link> */}
          </Pane>
        </form>
      </Pane>
    );
  }
}

export default LoginPage;
