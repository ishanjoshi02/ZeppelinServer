import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";

class LoginPage extends Component {
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
            CONSUMER LOGIN
          </Heading>
          <div>
            <label htmlFor="email">Email</label>
            <TextInput
              name="email"
              placeholder="jhon.doe@xyz.com"
              margin={20}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <TextInput
              name="password"
              type="password"
              placeholder="**********"
              margin={20}
            />
          </div>

          <Pane display="flex" alignItems="center" justifyContent="center" />

          <Pane display="flex" alignItems="center" justifyContent="center">
            <Link to="/consumer-home">
              <Button
                appearance="primary"
                intent="success"
                type="submit"
                margin={20}
              >
                LOGIN
              </Button>
            </Link>
            <Link to="/consumer-register">
              <Button appearance="primary" type="submit" margin={20}>
                REGISTER
              </Button>
            </Link>
          </Pane>
        </form>
      </Pane>
    );
  }
}

export default LoginPage;
