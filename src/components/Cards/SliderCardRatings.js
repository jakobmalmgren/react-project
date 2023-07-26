import css from "./SliderCardRatings.module.css";
function SliderCardRatings(props) {
  const {
    // id,
    ratingStars,
    ratingTitle,
    ratingDescription,
    ratingCustomer,
    ratingTime,
  } = props;

  return (
    <div className={css.ratingCard}>
      <div>{ratingStars}</div>
      <div className={css.ratingTitle}>
        <h3>{ratingTitle}</h3>
      </div>
      <div className={css.ratingDescription}>
        <p>{ratingDescription}</p>
      </div>
      <div className={css.ratingCustomer}>
        <p>{ratingCustomer}</p>
      </div>
      <div className={css.ratingTime}>
        <p>{ratingTime}</p>
      </div>
    </div>
  );
}

export default SliderCardRatings;
