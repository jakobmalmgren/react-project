import css from "./CategorySectionMenWomen.module.css";
import { Link } from "react-router-dom";
function CategorySectionMenWomen(props) {
  return (
    <div className={css.categoryWrapper}>
      <Link to="/MenPage" className={css.categorySectionOne}>
        <div>
          <h2>{props.categoryMale}</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </Link>
      <Link to="/WomenPage" className={css.categorySectionTwo}>
        <div>
          <h2>{props.categoryFemale}</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </Link>
    </div>
  );
}

export default CategorySectionMenWomen;
