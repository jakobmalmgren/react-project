import { VscHeart } from "react-icons/vsc";
import css from "./Card.module.css";
import { Link } from "react-router-dom";
// import { VscHeartFilled } from "react-icons/vsc";
// import { useState } from "react";

function Card(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = "30%";
  }

  return (
    <div className={css.card}>
      <Link to="/ItemOverviewPage">
        <img
          src={`img/${props.image.img1}`}
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
        <VscHeart></VscHeart>
      </div>
    </div>
  );
}

export default Card;
