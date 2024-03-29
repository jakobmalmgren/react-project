import { Link } from "react-router-dom";
import css from "./BigScreenNavigationSection.module.css";
function BigScreenNavigationSection(props) {
  return (
    <ul className={css.navlinksList}>
      <Link to="/womenPage">
        <li>WOMEN</li>
      </Link>
      <Link to="/menPage">
        <li>MEN</li>
      </Link>
      <Link to="/kidsPage">
        <li>KIDS</li>
      </Link>
      <Link to="/outletPage">
        <li className={css.outletRedColor}>OUTLET</li>
      </Link>
    </ul>
  );
}

export default BigScreenNavigationSection;
