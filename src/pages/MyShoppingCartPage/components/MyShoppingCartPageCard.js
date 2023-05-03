import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import css from "./MyShoppingCartPageCard.module.css";

function MyShoppingCartPageCard(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = props.discountValue;
  }
  const itemValue = (props.price / ((100 - props.discountValue) / 10)) * 10;
  return (
    <div className={css.myShoppingCartCard}>
      <div className={css.imgWrapper}>
        <img
          src={`img/${props.image[0]}`}
          alt=""
          className={css.myShoppingCartCardImg}
        />
        {discountIcon && <h2 className={css.discountIcon}>{discountIcon}%</h2>}
      </div>

      <div className={css.myShoppingCartCardInfo}>
        <div>
          <h3>{props.description}</h3>
          <p>{props.item} </p>

          {discountIcon && (
            <p className={css.itemValue}>
              {/* ${(props.price / ((100 - props.discountValue) / 10)) * 10} */}
              ${itemValue.toFixed(2)}
            </p>
          )}
          {discountIcon ? (
            <p className={css.cardPriceDiscount}>$ {props.price}</p>
          ) : (
            <p className={css.cardPrice}>$ {props.price}</p>
          )}
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
          <p>{props.qty}</p>
          <button
            className={css.plusMinusBtn}
            onClick={() => {
              props.handleIncrement(props);
            }}
          >
            <BiPlus className={css.icon}></BiPlus>
          </button>

          <h2>$ {props.price * props.qty}</h2>
        </div>
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
