import css from "./HeroSection..module.css";
function HeroSection() {
  return (
    <div className={css.heroWrapper}>
      <div className={css.hero}>
        <h1>STEP INTO THE SPRING</h1>
        <p>New spring collection is here</p>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}

export default HeroSection;
