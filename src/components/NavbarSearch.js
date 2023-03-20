import { IoIosSearch } from "react-icons/io";
function NavbarSearch() {
  return (
    <form>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        className="searchField"
      />

      <div className="search-icon-wrapper">
        <IoIosSearch className="seach-icon"></IoIosSearch>
      </div>
    </form>
  );
}

export default NavbarSearch;
