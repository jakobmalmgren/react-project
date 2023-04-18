import css from "./CategorySectionKids.module.css";
import { Link } from "react-router-dom";
function CategorySectionKids() {
  return (
    <Link to="/KidsPage">
      <div className={css.categorySectionKids}>
        <h2>KIDS</h2>
        <p>The spring collection has arrived</p>
        <h2>SHOP NOW!</h2>
      </div>
    </Link>
  );
}

export default CategorySectionKids;
