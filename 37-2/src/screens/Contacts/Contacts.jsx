import "./Contacts.css";
import { Link, useLoaderData } from "react-router-dom";

function Contacts() {
  const contactsArr = useLoaderData();

  return (
    <table className="contacts-table">
      <tbody>
        {contactsArr.map((element) => {
          return (
            <tr key={element.id} className="contact-row">
              <td className="contact-cell">{element.username}</td>
              <td className="contact-cell">{element.email}</td>
              <td className="contact-cell">{element.phone}</td>
              <td className="contact-cell">{element.website}</td>
              <td className="contact-cell">
                <Link className="user-albums" to={`/albums/${element.id}`}>
                  Albums
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Contacts;
