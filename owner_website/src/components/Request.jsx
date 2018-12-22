import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class Request extends Component {
  state = {};
  render() {
    return (
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        margin={40}
        width={450}
        background={"tint2"}
        elevation={2}
      >
        <Text color="neutral" margin={20}>
          Request For
        </Text>
        <Text color="neutral" margin={20}>
          Request By
        </Text>
        <Button appearance="primary" intent="success" type="submit" margin={20}>
          ACCEPT
        </Button>
        <Button appearance="primary" intent="danger" margin={20}>
          REJECT
        </Button>
      </Pane>
    );
  }
}

export default Request;
