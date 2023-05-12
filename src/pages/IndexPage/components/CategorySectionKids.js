import css from "./CategorySectionKids.module.css";
import { Link } from "react-router-dom";
function CategorySectionKids() {
  return (
    <Link to="/KidsPage">
      <div className={css.categorySectionKidsWrapper}>
        <div>
          <h2>KIDS</h2>
          <p>The summer collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
    </Link>
  );
}

export default CategorySectionKids;
