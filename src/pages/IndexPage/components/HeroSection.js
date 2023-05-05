import css from "./HeroSection..module.css";
function HeroSection() {
  return (
    <div className={css.heroWrapper}>
      <div className={css.hero}>
        <h1>STEP INTO THE SUMMER</h1>
        <p>New summer collection is here</p>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}

export default HeroSection;
