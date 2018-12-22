import React, { Component } from "react";
import Request from "./Request";
import socketIOClient from "socket.io-client";
import io from "socket.io-client";
const IP_ADDRESS = "192.168.56.1";

class OwnerHomePage extends Component {
  state = {
    permissions: [],
    endpoint: `http://${IP_ADDRESS}:8001`,
    qid: null,
    values: null,
    dataStore: null,
    requestComponent: null
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("permission", ({ qid, values, dataStore }) => {
      console.log(qid);
      console.log(values);
      console.log(dataStore);
      if ((qid, values, dataStore)) {
        const { first_name, last_name } = values;
        this.setState({
          requestComponent: <Request data={{ qid, values, dataStore }} />
        });
      }
    });
    return <div>{this.state.requestComponent}</div>;
  }
}

export default OwnerHomePage;
