import { Link, useLoaderData } from "react-router-dom";
import "./Photos.css";

function Photos() {
  const photosArr = useLoaderData();
  return (
    <div className="photos-wrapper">
      <Link className="link-button" to={-1}>
        Back to Albums
      </Link>
      <ul className="photos-list">
        {photosArr.map((element) => {
          return (
            <li key={element.id} className="photos-list__item">
              <img
                src={element.url}
                alt="image"
                className="photos-list__image"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Photos;
