import { BiRightArrowCircle } from "react-icons/bi";
import css from "./FilterButton.module.css";

function FilterButton(props) {
  return (
    <button className={css.filterBtn}>
      FILTER <BiRightArrowCircle></BiRightArrowCircle>
    </button>
  );
}

export default FilterButton;
