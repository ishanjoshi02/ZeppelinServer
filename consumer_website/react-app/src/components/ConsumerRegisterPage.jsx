import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class ConsumerRegisterPage extends Component {
  state = {};
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
            REGISTER AS CONSUMER
          </Heading>

          <div>
            <label htmlFor="orgName">Organization Name</label>
            <TextInput
              name="orgName"
              placeholder="Organization Name"
              margin={20}
            />
          </div>

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

          <Pane display="flex" alignItems="center" justifyContent="center">
            <Button
              appearance="primary"
              intent="success"
              type="submit"
              margin={20}
            >
              REGISTER
            </Button>
          </Pane>
        </form>
      </Pane>
    );
  }
}

export default ConsumerRegisterPage;
