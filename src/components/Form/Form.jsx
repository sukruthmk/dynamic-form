import React from "react";

import Field from "../Field";

const Form = ({ data, valuesMap, handleChange }) => {
  return (
    <div className="dynamic-form-fields">
      {data.map((fieldData, index) => (
        <Field
          key={index}
          fieldData={fieldData}
          valuesMap={valuesMap}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default Form;
