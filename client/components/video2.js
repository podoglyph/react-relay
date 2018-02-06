import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Video2 extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://192.168.0.42:8888/stream"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <img src={response} / >
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default Video2;
