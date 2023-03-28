import { BiRightArrowCircle } from "react-icons/bi";
import css from "./FilterButton.module.css";

function FilterButton() {
  return (
    <div>
      <button className={css.filterBtn}>
        FILTER <BiRightArrowCircle></BiRightArrowCircle>
      </button>
    </div>
  );
}

export default FilterButton;
