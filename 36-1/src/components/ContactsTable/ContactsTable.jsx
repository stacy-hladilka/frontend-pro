import "./ContactsTable.css";

function ContactsTable(props) {
  return (
    <>
      <table className="contacts-table">
        <thead className="contacts-table__title">
          <tr className="contacts-table__title-row">
            <th className="contacts-table__title-cell">First Name</th>
            <th className="contacts-table__title-cell">Last Name</th>
            <th className="contacts-table__title-cell">Phone Number</th>
            <th className="contacts-table__title-cell">Remove</th>
          </tr>
        </thead>
        <tbody className="contacts-table__body">
          {props.contactsArr.map((element, index) => {
            return (
              <tr key={index} className="contacts-table__row">
                <td className="contacts-table__cell">{element.firstName}</td>
                <td className="contacts-table__cell">{element.lastName}</td>
                <td className="contacts-table__cell">{element.phoneNumber}</td>
                <td className="contacts-table__cell">
                  <button
                    onClick={() => {
                      props.deleteContact(index);
                    }}
                    className="delete-button"
                  >
                    Remove Contact
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={props.changeScreen} className="navigation-button">Add Contact</button>
    </>
  );
}

export default ContactsTable;
