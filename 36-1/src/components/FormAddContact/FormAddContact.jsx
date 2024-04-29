import "./FormAddContact.css";
import { useState } from "react";

function FormAddContact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  function handleSubmit(event) {
    props.submitForm(event, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    });
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    props.changeScreen();
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="user-input">
        <input
          required
          placeholder="Enter first Name"
          value={firstName}
          onChange={handleNameChange}
          type="text"
          className="input"
        />
        <input
          required
          placeholder="Enter last Name"
          value={lastName}
          onChange={handleLastNameChange}
          type="text"
          className="input"
        />
        <input
          required
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          type="tel"
          className="input"
        />
        <input value="Save" type="submit" className="submit-button" />
      </form>
      <button onClick={props.changeScreen} className="navigation-button">
        Cancel
      </button>
    </div>
  );
}

export default FormAddContact;
