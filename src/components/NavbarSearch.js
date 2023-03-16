import { GoSearch } from "react-icons/go";
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
        <GoSearch className="seach-icon"></GoSearch>
      </div>
    </form>
  );
}

export default NavbarSearch;
