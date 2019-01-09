import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    //validate entire form
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    //validate each input
    //destructured input.name and input.value
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input); //pass which input to validate

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    //copy state
    const data = { ...this.state.data };
    //update username
    data[input.name] = input.value;
    //update state of both data and errors
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text", autoFocus = false) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        type={type}
        autoFocus={autoFocus}
      />
    );
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
