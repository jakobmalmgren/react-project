import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import css from "./MyShoppingCartPageCard.module.css";

function MyShoppingCartPageCard(props) {
  // console.log(props.qty); // kan ta del hr av qty
  return (
    <div className={css.myShoppingCartCard}>
      <div className={css.imgWrapper}>
        <img
          src={`img/${props.image.img1}`}
          alt=""
          className={css.myShoppingCartCardImg}
        />
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
              props.onRemove(props);
            }}
          >
            <BiMinus className={css.icon}></BiMinus>
          </button>
          <p>{props.qty}</p>
          <button
            className={css.plusMinusBtn}
            onClick={() => {
              props.onAdd(props);
            }}
          >
            <BiPlus className={css.icon}></BiPlus>
          </button>

          <h2>$ {props.price * props.qty}</h2>
        </div>
        <BsFillTrashFill
          onClick={() => {
            props.onRemove(props);
          }}
          className={css.myShoppingCartCardDeleteIcon}
        ></BsFillTrashFill>
      </div>
    </div>
  );
}

export default MyShoppingCartPageCard;
