import { VscHeart } from "react-icons/vsc";
import css from "./Card.module.css";
import { Link } from "react-router-dom";
import { VscHeartFilled } from "react-icons/vsc";

function Card(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = "30%";
  }
  // function handleDiscount() {}

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
      {discountIcon && <div className={css.discountIcon}>{discountIcon}</div>}
      <h3 className={css.cardItem}>{props.item}</h3>
      <p className={css.cardDescription}>{props.description}</p>
      <p className={css.cardPrice}>${props.price}</p>

      <div className={css.cardIcon}>
        <VscHeart
          onClick={() => {
            props.renderLikedItems(props);
          }}
        ></VscHeart>
      </div>
    </div>
  );
}

export default Card;
