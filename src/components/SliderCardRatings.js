import { AiFillStar } from "react-icons/ai";
import css from "./SliderCardRatings.module.css";
function SliderCardRatings() {
  return (
    <div className={css.ratingCard}>
      <div>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
        <AiFillStar></AiFillStar>
      </div>
      <div className={css.ratingTitle}>
        <h3>VERY GOOD EXPERIENCE!</h3>
      </div>
      <div className={css.ratingDescription}>
        <p>Quick and good support service</p>
      </div>
      <div className={css.ratingCustomer}>
        <p>Jakob Malmgren</p>
      </div>
      <div className={css.ratingTime}>
        <p>14 hours ago</p>
      </div>
    </div>
  );
}

export default SliderCardRatings;
