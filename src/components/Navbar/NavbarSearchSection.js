import { IoIosSearch } from "react-icons/io";
import css from "./NavbarSearchSection.module.css";

function NavbarSearchSection(props) {
  return (
    <div className={css.formWrapper}>
      <form className={css.navbarForm}>
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

        <IoIosSearch className={css.searchIcon}></IoIosSearch>
      </form>
    </div>
  );
}

export default NavbarSearchSection;
