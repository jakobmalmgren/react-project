import { CgClose } from "react-icons/cg";
import css from "./MyShoppingCartPage.module.css";
import MyShoppingCartCard from "../components/MyShoppingCartCard";

function MyShoppingCartPage({ setOpenMyCart }) {
  return (
    <div className={css.myShoppingCart}>
      <div className={css.myShoppingCartHeader}>
        <h2>SHOPPING BAG (2)</h2>
        <CgClose
          className={css.closingIcon}
          onClick={() => {
            setOpenMyCart(false);
          }}
        ></CgClose>
      </div>
      <MyShoppingCartCard></MyShoppingCartCard>
      <MyShoppingCartCard></MyShoppingCartCard>

      <div className={css.totalCountWrapper}>
        <h2>Total</h2>
        <h2>$ 50</h2>
      </div>

      <button className={css.myShoppingCartBtn}>GO TO CHECKOUT</button>
    </div>
  );
}

export default MyShoppingCartPage;
