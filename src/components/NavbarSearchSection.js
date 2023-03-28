import { IoIosSearch } from "react-icons/io";
import css from "./NavbarSearchSection.module.css";
function NavbarSearchSection() {
  return (
    <div className={css.formWrapper}>
      <form className={css.navbarForm}>
        <input
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
