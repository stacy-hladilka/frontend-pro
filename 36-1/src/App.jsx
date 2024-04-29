import { useState, useEffect } from "react";
import "./App.css";
import FormAddContact from "./components/FormAddContact/FormAddContact";
import ContactsTable from "./components/ContactsTable/ContactsTable";

function App() {
  const [userData, setUserData] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("table");

  async function fetchData() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      if (result.ok === false) {
        throw "Error";
      }
      const resultObj = await result.json();
      const transformedResult = resultObj.map((element) => {
        return {
          firstName: element.name.split(" ")[0],
          lastName: element.name.split(" ")[1],
          phoneNumber: element.phone,
        };
      });
      setUserData(transformedResult);
    } catch (error) {
      alert("Unexpected Error! Try again later!");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function handleUserDataSubmit(event, data) {
    event.preventDefault();
    const cloneUserData = structuredClone(userData);
    cloneUserData.push(data);
    setUserData(cloneUserData);
  }
  function handleDeleteContact(index) {
    const cloneUserData = structuredClone(userData);
    cloneUserData.splice(index, 1);
    setUserData(cloneUserData);
  }
  function toggleScreens() {
    if (currentScreen === "form") {
      setCurrentScreen("table");
    } else {
      setCurrentScreen("form");
    }
  }

  return (
    <div className="form-wrapper">
      {currentScreen === "form" && (
        <FormAddContact
          changeScreen={toggleScreens}
          submitForm={handleUserDataSubmit}
        />
      )}
      {currentScreen === "table" && (
        <ContactsTable
          changeScreen={toggleScreens}
          deleteContact={handleDeleteContact}
          contactsArr={userData}
        />
      )}
    </div>
  );
}

export default App;
