import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    //validate entire form
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = e => {
    //validate entire form
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    //validate each input
    //desrtuctured input.name and input.value
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
      // ...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
      // ...
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input); //pass which input to validate

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    //copy state
    const account = { ...this.state.account };
    //update username
    account[input.name] = input.value;
    //update state of both account and errors
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
