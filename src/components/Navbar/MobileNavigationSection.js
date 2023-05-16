import css from "./MobileNavigationSection.module.css";
import { Link } from "react-router-dom";

function MobileNavigationSection(props) {
  return (
    <div className={css.navlinksMobile}>
      <ul className={css.navlinksList}>
        <Link
          to="/womenPage"
          onClick={() => {
            props.setToggleBurger(false);
          }}
        >
          <li>WOMEN</li>
        </Link>
        <Link
          to="/menPage"
          onClick={() => {
            props.setToggleBurger(false);
          }}
        >
          <li>MEN</li>
        </Link>
        <Link
          to="/kidsPage"
          onClick={() => {
            props.setToggleBurger(false);
          }}
        >
          <li>KIDS</li>
        </Link>
        <Link
          to="/outletPage"
          onClick={() => {
            props.setToggleBurger(false);
          }}
        >
          <li className={css.outletRedColor}>OUTLET</li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileNavigationSection;
