import css from "./SliderCardRatings.module.css";
function SliderCardRatings(props) {
  return (
    <div className={css.ratingCard}>
      <div>{props.ratingStars}</div>
      <div className={css.ratingTitle}>
        <h3>{props.ratingTitle}</h3>
      </div>
      <div className={css.ratingDescription}>
        <p>{props.ratingDescription}</p>
      </div>
      <div className={css.ratingCustomer}>
        <p>{props.ratingCustomer}</p>
      </div>
      <div className={css.ratingTime}>
        <p>{props.ratingTime}</p>
      </div>
    </div>
  );
}

export default SliderCardRatings;
