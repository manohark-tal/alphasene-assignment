import React, { Component } from "react";

import LoginForm from "../../../components/Forms/LoginForm";
import io from "socket.io-client";
import MessageForm from "../../Forms/MessageForm/index";
class HomePage extends Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      this.socket = io("http://localhost");
    }
  }
  render() {
    let content = this.props.loggedIn ? (
      <div>
        <div>{this.props.username}</div>
        <MessageForm />
      </div>
    ) : (
      <LoginForm submitAction={this.props.loginUser} />
    );
    return content;
  }
}
export default HomePage;
