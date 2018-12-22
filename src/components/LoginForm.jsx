import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };
  usernameInput = React.createRef();

  // componentDidMount() {
  //   this.usernameInput.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    //copy state
    const account = { ...this.state.account };
    //update username
    account[input.name] = input.value;
    //update state
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              name="username"
              value={account.username}
              onChange={this.handleChange}
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
              name="password"
              value={account.password}
              onChange={this.handleChange}
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
