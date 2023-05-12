import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { MdHeartBroken } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

function Card(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = props.discountValue;
  }

  const itemValue = (props.price / ((100 - props.discountValue) / 10)) * 10;
  return (
    <div className={css.card}>
      <Link to="/ItemOverviewPage">
        <img
          src={`img/${props.image[0]}`}
          alt=""
          className={css.cardImage}
          onClick={() => {
            props.addItemToCart(props);
          }}
        />
      </Link>
      {discountIcon && <h2 className={css.discountIcon}>{discountIcon}%</h2>}
      <div className={css.priceWrapper}>
        {discountIcon && (
          <p className={css.itemValue}>${itemValue.toFixed(0)}</p>
        )}
        {discountIcon ? (
          <p className={css.cardPriceDiscount}>$ {props.price}</p>
        ) : (
          <p className={css.cardPrice}>$ {props.price}</p>
        )}
      </div>

      <h3 className={css.cardItem}>{props.item}</h3>

      <p className={css.cardDescription}>{props.description}</p>
      <p>{props.category}</p>

      <div className={css.cardIconContainer}>
        <div className={css.cardIconWrapper}>
          <div
            className={css.cardIcon}
            onClick={() => {
              props.renderLikedItems(props);
            }}
          >
            <VscHeart></VscHeart>
          </div>
          <div
            className={css.cardIcon}
            onClick={() => {
              props.deleteLikedItems(props);
            }}
          >
            <MdHeartBroken></MdHeartBroken>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
