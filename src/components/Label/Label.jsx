import React from "react";

import "./Label.scss";

const Label = ({ children, forID }) => {
  return (
    <label className="dynamic-form-field-label" htmlFor={forID}>
      {children}
    </label>
  );
};

export default Label;
