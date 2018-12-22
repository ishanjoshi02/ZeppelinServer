import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class Request extends Component {
  state = {};
  onAccept = e => {
    e.preventDefault();
    fetch("http://localhost:5000/accepted", {
      method: "POST",
      body: JSON.stringify(this.props),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {});
  };
  onReject = e => {
    e.preventDefault();
    fetch("http://localhost:5000/denied", {
      method: "POST",
      body: JSON.stringify(this.props),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {});
  };
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
          Request For {this.props.data.values.balance}
        </Text>
        <Text color="neutral" margin={20}>
          Data Store {this.props.data.dataStore}
        </Text>
        <Button
          appearance="primary"
          intent="success"
          onClick={this.onAccept}
          margin={20}
        >
          ACCEPT
        </Button>
        <Button
          appearance="primary"
          intent="danger"
          onClick={this.onReject}
          margin={20}
        >
          REJECT
        </Button>
      </Pane>
    );
  }
}

export default Request;
