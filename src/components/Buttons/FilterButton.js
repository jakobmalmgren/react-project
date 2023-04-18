import { BiRightArrowCircle } from "react-icons/bi";
import css from "./FilterButton.module.css";
import { useState } from "react";

function FilterButton(props) {
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
            <input type="checkbox" id="pants" />
            <label for="pants">Pants</label>
            <input type="checkbox" id="tshirt" />
            <label for="tshirt">T-shirts</label>
            <input type="checkbox" id="jacket" />
            <label for="jacket">Jackets</label>
            <input type="checkbox" id="shorts" />
            <label for="shorts">Shorts</label>
            <input type="checkbox" id="shirt" />
            <label for="shirt">Shirts</label>
            <input type="checkbox" id="sweathshirts" />
            <label for="sweatshirts">Sweatshirts</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterButton;
