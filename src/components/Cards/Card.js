import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { MdHeartBroken } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

function Card(props) {
  const {
    discount,
    discountValue,
    price,
    image,
    item,
    description,
    category,
    renderLikedItems,
    deleteLikedItems,
    addItemToCart,
  } = props;

  let discountIcon;
  if (discount === true) {
    discountIcon = discountValue;
  }

  const itemValue = (price / ((100 - discountValue) / 10)) * 10;
  return (
    <div className={css.card}>
      <Link to="/ItemOverviewPage">
        <img
          src={`img/${image[0]}`}
          alt=""
          className={css.cardImage}
          onClick={() => {
            addItemToCart(props);
          }}
        />
      </Link>
      <div>
        <p className={css.cardDescription}>{description}</p>
        {discountIcon && <h2 className={css.discountIcon}>{discountIcon}%</h2>}
        <div className={css.priceWrapper}>
          {discountIcon && (
            <p className={css.itemValue}>${itemValue.toFixed(0)}</p>
          )}
          {discountIcon ? (
            <p className={css.cardPriceDiscount}>$ {price}</p>
          ) : (
            <p className={css.cardPrice}>$ {price}</p>
          )}
        </div>
        <h3 className={css.cardItem}>{item}</h3>
        <p>{category}</p>
      </div>

      <div className={css.cardIconContainer}>
        <div className={css.cardIconWrapper}>
          <div
            className={css.cardIcon}
            onClick={() => {
              renderLikedItems(props);
            }}
          >
            <VscHeart></VscHeart>
          </div>
          <div
            className={css.cardIcon}
            onClick={() => {
              deleteLikedItems(props);
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
