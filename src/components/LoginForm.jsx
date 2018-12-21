import React, { Component } from "react";

class LoginForm extends Component {
  usernameInput = React.createRef();

  // componentDidMount() {
  //   this.usernameInput.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Logging in", this.usernameInput.current.value);
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              id="username"
              type="text"
              className="form-control"
              required
              ref={this.usernameInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
