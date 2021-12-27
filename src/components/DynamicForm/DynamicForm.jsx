import React, { useState } from "react";

import Form from "../Form";
import SubmitButton from "../SubmitButton";

import "./DynamicForm.scss";

const DynamicForm = ({ data, handleSubmit }) => {
  const [valuesMap, setValuesMap] = useState({});

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValuesMap({
      ...valuesMap,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(valuesMap);
  };
  return (
    <div className="dynamic-form">
      <form onSubmit={onSubmit}>
        <Form data={data} valuesMap={valuesMap} handleChange={handleChange} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default DynamicForm;
