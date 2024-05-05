import { useState } from "react";
import "./App.css";
import { Formik, Field, ErrorMessage } from "formik";

function App() {
  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Enter your name";
    } else if (!/^[A-Z]+$/i.test(values.name)) {
      errors.name = "Contains invalid characters";
    }
    if (!values.email) {
      errors.email = "Enter your e-mail";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Enter your phone number";
    } else if (!/^[0-9]+$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Phone number contains irrelevant characters";
    } else if (values.phoneNumber.length !== 12) {
      errors.phoneNumber = "Phone number has irrelevant length";
    }

    return errors;
  };
  return (
    <>
      <Formik
        validate={validateForm}
        validateOnChange
        initialValues={{ name: "", email: "", phoneNumber: "" }}
        onSubmit={(values, actions) => {
          alert(`Your data has been successfully submitted.
          Your name: ${values.name};
          Your e-mail: ${values.email};
          Your phone number: ${values.phoneNumber}.
          Thank you!`);
          actions.resetForm();
        }}
      >
        {(props) => (
          <form className="data-form" onSubmit={props.handleSubmit}>
            <Field className="input-data" name="name" placeholder="name" />
            <ErrorMessage component="span" className="error" name="name" />
            <Field
              className="input-data"
              name="email"
              placeholder="e-mail"
              type="email"
            />
            <ErrorMessage component="span" className="error" name="email" />
            <Field
              className="input-data"
              name="phoneNumber"
              placeholder="phone number"
            />
            <ErrorMessage
              component="span"
              className="error"
              name="phoneNumber"
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
