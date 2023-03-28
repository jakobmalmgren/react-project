import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import css from "./MyShoppingCartCard.module.css";

function MyShoppingCartCard() {
  return (
    <div className={css.myShoppingCartCard}>
      <img
        src="/img/converse1.jpeg"
        alt=""
        className={css.myShoppingCartCardImg}
      />

      <div className={css.myShoppingCartCardInfo}>
        <h3>TOMMY HILLFIGER</h3>
        <p>TH flex shirt slim fit </p>
        <p>S</p>
        <p>$ 50</p>
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
        <BsTrash3 className={css.myShoppingCartCardDeleteIcon}></BsTrash3>
      </div>
    </div>
  );
}

export default MyShoppingCartCard;
