import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import css from "./MyShoppingCartPageCard.module.css";

function MyShoppingCartPageCard(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = "30%";
  }
  return (
    <div className={css.myShoppingCartCard}>
      <div className={css.imgWrapper}>
        <img
          src={`img/${props.image[0]}`}
          alt=""
          className={css.myShoppingCartCardImg}
        />
        {discountIcon && <div className={css.discountIcon}>{discountIcon}</div>}
      </div>

      <div className={css.myShoppingCartCardInfo}>
        <div>
          <h3>{props.description}</h3>
          <p>{props.item} </p>
          <p>$ {props.price}</p>
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
