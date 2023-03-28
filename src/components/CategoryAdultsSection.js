import css from "./CategoryAdultsSection.module.css";
function CategoryAdultsSection() {
  return (
    <div className={css.categoryWrapper}>
      <div className={css.categorySectionOne}>
        <div>
          <h2>MEN</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
      <div className={css.categorySectionTwo}>
        <div>
          <h2>WOMEN</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryAdultsSection;
