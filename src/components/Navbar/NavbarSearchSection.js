import { IoIosSearch } from "react-icons/io";
import css from "./NavbarSearchSection.module.css";
import { Link } from "react-router-dom";

function NavbarSearchSection(props) {
  return (
    <div className={css.navbarForm}>
      <Link to="/SearchProductsPage">
        <input
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className={css.searchField}
        />
      </Link>

      <IoIosSearch className={css.searchIcon}></IoIosSearch>
    </div>
  );
}

export default NavbarSearchSection;
