import { BiRightArrowCircle } from "react-icons/bi";
import css from "./FilterButton.module.css";
import { useState } from "react";

function FilterButton(props) {
  function changeValue(e) {
    props.onFilterValueSelected(e.target.value);
  }
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div className={css.contentWrapper}>
      <div className={css.btnWrapper}>
        <button
          className={css.filterBtn}
          onClick={() => {
            setToggleFilter(!toggleFilter);
          }}
        >
          FILTER <BiRightArrowCircle></BiRightArrowCircle>
        </button>
      </div>
      {toggleFilter && (
        <div className={css.inputWrapper}>
          <div className={css.filterInput}>
            <select name="filter" onChange={changeValue}>
              <option value="All">All</option>
              <option value="Pants">Pants</option>
              <option value="Shoes">Shoes</option>
              <option value="T-shirts">T-shirts</option>
              <option value="Jackets">Jackets</option>
              <option value="Shorts">Shorts</option>
              <option value="Sweatshirts">Sweatshirts</option>
              <option value="Discount">Discount</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterButton;
