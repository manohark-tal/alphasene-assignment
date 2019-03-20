import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.submitAction(this.state.username);
  };
  render() {
    return (
      <form className="form-horizontal login-form">
        <div className="field">
          <label className="label">User Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="username"
              name="username"
              onChange={this.onChangeHandler}
            />
          </div>
        </div>

        <div className="field">
          <button
            className="button is-success"
            type="submit"
            onClick={this.formSubmit}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
