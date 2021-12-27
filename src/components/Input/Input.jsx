import React from "react";

const Input = ({ id, type, name, value = "", handleChange, placeholder }) => {
  return (
    <input
      className="dynamic-form-field-input"
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
