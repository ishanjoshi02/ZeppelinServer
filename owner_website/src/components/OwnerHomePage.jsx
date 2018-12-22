import React, { Component } from "react";
import Request from "./Request";
import socketIOClient from "socket.io-client";
import io from "socket.io-client";
const IP_ADDRESS = "192.168.56.1";

class OwnerHomePage extends Component {
  state = {
    permissions: []
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("permission", permission => {
      console.log(permission);
    });
    return (
      <div>
        <Request />
      </div>
    );
  }
}

export default OwnerHomePage;
