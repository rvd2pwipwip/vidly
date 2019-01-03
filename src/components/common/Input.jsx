import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={name === "username" ? true : false}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        type={name === "password" ? "password" : "text"}
        className="form-control"
        // required
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
