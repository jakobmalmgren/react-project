import { VscHeart } from "react-icons/vsc";
import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { VscHeartFilled } from "react-icons/vsc";

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
      {discountIcon && <p className={css.itemValue}>${itemValue.toFixed(2)}</p>}
      <h3 className={css.cardItem}>{props.item}</h3>
      <p className={css.cardDescription}>{props.description}</p>

      {discountIcon ? (
        <p className={css.cardPriceDiscount}>$ {props.price}</p>
      ) : (
        <p className={css.cardPrice}>$ {props.price}</p>
      )}

      <div className={css.cardIcon}>
        {props.heart ? (
          <VscHeartFilled
            onClick={() => {
              props.toggleHeart();
              props.renderLikedItems(props);
            }}
          ></VscHeartFilled>
        ) : (
          <VscHeart
            onClick={() => {
              props.toggleHeart();
              props.renderLikedItems(props);
            }}
          ></VscHeart>
        )}
        {/* <VscHeart
          onClick={() => {
            props.renderLikedItems(props);
          
          }}
        ></VscHeart> */}
      </div>
    </div>
  );
}

export default Card;
