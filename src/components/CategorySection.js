import css from "./CategorySection.module.css";
function CategorySection(props) {
  return (
    <div className={css.categoryWrapper}>
      <div className={css.categorySectionOne}>
        <div>
          <h2>{props.categoryMale}</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
      <div className={css.categorySectionTwo}>
        <div>
          <h2>{props.categoryFemale}</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
