import css from "./CategoryKidsSection.module.css";
function CategoryKidsSection() {
  return (
    <div className={css.categoryWrapper}>
      <div className={css.categorySectionOne}>
        <div>
          <h2>BOYS</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
      <div className={css.categorySectionTwo}>
        <div>
          <h2>GIRLS</h2>
          <p>The spring collection has arrived</p>
          <h2>SHOP NOW!</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoryKidsSection;
