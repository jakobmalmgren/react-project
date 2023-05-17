import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import css from "./MyShoppingCartPageCard.module.css";
import { Link } from "react-router-dom";
function MyShoppingCartPageCard(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = props.discountValue;
  }
  const itemValue = (props.price / ((100 - props.discountValue) / 10)) * 10;
  return (
    <div className={css.myShoppingCartCard}>
      <div className={css.imgWrapper}>
        <Link to="/ItemOverviewPage">
          <img
            src={`img/${props.image[0]}`}
            onClick={() => {
              props.addItemToCart(props);
              props.handleMyShoppingCartPage();
            }}
            alt=""
            className={css.myShoppingCartCardImg}
          />
        </Link>
        {discountIcon && <h2 className={css.discountIcon}>{discountIcon}%</h2>}
      </div>

      <div className={css.myShoppingCartCardInfo}>
        <div>
          <p className={css.cardDesciption}>{props.description}</p>
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
          <h3 className={css.cardItem}>{props.item} </h3>
          <p>{props.category}</p>
        </div>

        <div className={css.plusMinusWrapperMyShoppingCart}>
          <button
            className={css.plusMinusBtn}
            onClick={() => {
              props.handleDecrement(props);
            }}
          >
            <BiMinus className={css.icon}></BiMinus>
          </button>
          <p className={css.quantityArea}>{props.qty}</p>
          <button
            className={css.plusMinusBtn}
            onClick={() => {
              props.handleIncrement(props);
            }}
          >
            <BiPlus className={css.icon}></BiPlus>
          </button>
        </div>
        <h2>$ {props.price * props.qty}</h2>
        <BsFillTrashFill
          onClick={() => {
            props.deleteItems(props);
          }}
          className={css.myShoppingCartCardDeleteIcon}
        ></BsFillTrashFill>
      </div>
    </div>
  );
}

export default MyShoppingCartPageCard;
