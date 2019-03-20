import React from "react";

export default class MessageForm extends React.Component {
  state = { message: "" };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  captureEnter = event => {
    this.setState({ [event.target.name]: event.target.value });

    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      this.props.sendMessage({
        channelId: this.props.channelId,
        username: this.props.username,
        data: this.state.message
      });
    }
  };
  render() {
    return (
      <div className="field">
        <label className="label">User Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="message"
            name="message"
            onChange={this.onChangeHanler}
            onKeyPress={this.captureEnter}
          />
        </div>
      </div>
    );
  }
}
