import React from "react";

import Label from "../Label";
import Input from "../Input";

import "./Field.scss";

const Field = ({ fieldData, valuesMap, handleChange }) => {
  const { tag, name, type, human_label, conditional = {} } = fieldData;
  const value = valuesMap[name];
  const id = `input-${name}`;
  const show = conditional?.show_if
    ? conditional.show_if(valuesMap[conditional.name])
    : true;
  if (!show) return null;
  return (
    <div className="dynamic-form-field">
      {/* TODO: implement support for other tags */}
      {tag === "input" ? (
        <>
          <Label forID={id}>{human_label}</Label>
          {/* TODO: implement support for other input types like select, radio button etc */}
          <Input
            type={type}
            name={name}
            value={value}
            handleChange={handleChange}
          />
        </>
      ) : (
        <div>invalid input</div>
      )}
    </div>
  );
};

export default Field;
