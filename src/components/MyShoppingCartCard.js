import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import css from "./MyShoppingCartCard.module.css";

function MyShoppingCartCard() {
  return (
    <div className={css.myShoppingCartCard}>
      <img
        src="/img/t-shirt13.avif"
        alt=""
        className={css.myShoppingCartCardImg}
      />

      <div className={css.myShoppingCartCardInfo}>
        <div>
          <h3>TOMMY HILLFIGER</h3>
          <p>TH flex shirt slim fit </p>
          <p>S</p>
          <p>$ 50</p>
        </div>

        <div className={css.plusMinusWrapperMyShoppingCart}>
          <button className={css.plusMinusBtn}>
            <BiMinus className={css.icon}></BiMinus>
          </button>
          <p>5</p>
          <button className={css.plusMinusBtn}>
            <BiPlus className={css.icon}></BiPlus>
          </button>

          <h2>$ 50</h2>
        </div>
        <BsFillTrashFill
          className={css.myShoppingCartCardDeleteIcon}
        ></BsFillTrashFill>
      </div>
    </div>
  );
}

export default MyShoppingCartCard;
