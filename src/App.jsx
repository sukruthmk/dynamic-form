import React, { useState } from "react";

import DynamicForm from "./components/DynamicForm";

import "./App.scss";

const App = () => {
  const [response, setResponse] = useState(null);
  const data = [
    {
      tag: "input",
      name: "first_name",
      type: "text",
      human_label: "First Name",
    },
    {
      tag: "input",
      name: "last_name",
      type: "text",
      human_label: "Last Name",
    },
    {
      tag: "input",
      name: "email",
      type: "email",
      human_label: "Email Address",
    },
    {
      tag: "input",
      name: "phone_number",
      type: "text",
      human_label: "Phone Number",
    },
    {
      tag: "input",
      name: "job_title",
      type: "text",
      human_label: "Job Title",
    },
    {
      tag: "input",
      name: "date_of_birth",
      type: "date",
      human_label: "Date of Birth",
    },
    {
      tag: "input",
      name: "parental_consent",
      type: "checkbox",
      human_label: "Parental Consent",
      conditional: {
        name: "date_of_birth",
        show_if: (value) => {
          const date = new Date(value);
          const now = new Date();
          return (
            date >=
            new Date(now.getFullYear() - 13, now.getMonth(), now.getDate())
          );
        },
      },
    },
  ];
  const handleSubmit = (formData) => {
    setResponse(formData);
  };
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__heading"> Dynamic form </h1>
        <p className="app__sub-heading">
          Configurable React form with json structure
        </p>
        <DynamicForm data={data} handleSubmit={handleSubmit} />
        <div className="app__response">
          {response && (
            <>
              <h2> Component response </h2>
              <pre>
                <code>{response && JSON.stringify(response, null, 4)}</code>
              </pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
