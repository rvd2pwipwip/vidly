import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    return { username: "Username is required." };
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;

    console.log("Submitted");
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
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
