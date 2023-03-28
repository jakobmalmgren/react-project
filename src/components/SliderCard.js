import { VscHeart } from "react-icons/vsc";
import css from "./SliderCard.module.css";

function SliderCard() {
  return (
    <div className={css.sliderCard}>
      <img src="img/shoes.avif" alt="" className={css.sliderImage} />
      <h3 className={css.sliderItem}>Shoes</h3>
      <p className={css.sliderDescription}>Sneaker, Air Jordan</p>
      <p className={css.sliderPrice}>$80.99</p>
      <div className={css.sliderIcon}>
        <VscHeart></VscHeart>
      </div>
    </div>
  );
}

export default SliderCard;
