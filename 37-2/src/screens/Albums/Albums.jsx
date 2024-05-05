import { Link, useLoaderData } from "react-router-dom";
import "./Albums.css";

function Albums() {
  const albumsArr = useLoaderData();
  return (
    <div className="albums-wrapper">
      <Link className="link-button" to={-1}>
        Back to Contacts
      </Link>
      <ul className="albums-list">
        {albumsArr.map((element) => {
          return (
            <li key={element.id} className="albums-list__item">
              <div className="album-title"> {element.title}</div>
              <Link className="user-photos" to={`/photos/${element.id}`}>
                Photo
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Albums;
