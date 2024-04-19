import "./LeftNavigation.css";

function LeftNavigation(props) {
  return (
    <ul className="navigation-list">
      <li className="navigation-item">
        <a href="#" className="navigation-item__link">
          Tutorials
        </a>
      </li>
      <li className="navigation-item">
        <a href="#" className="navigation-item__link">
          Statistics
        </a>
      </li>
      <li className="navigation-item">
        <a href="#" className="navigation-item__link">
          Bird Watchers
        </a>
      </li>
      <li className="navigation-item">
        <a href="#" className="navigation-item__link">
          Articles
        </a>
      </li>
    </ul>
  );
}

export default LeftNavigation;
