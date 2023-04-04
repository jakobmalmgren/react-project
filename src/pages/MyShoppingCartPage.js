import { CgCloseO } from "react-icons/cg";
import css from "./MyShoppingCartPage.module.css";
import MyShoppingCartCard from "../components/MyShoppingCartCard";
import Button from "../components/Button";
function MyShoppingCartPage({ setOpenMyCart }) {
  return (
    <div className={css.myShoppingCart}>
      <div className={css.myShoppingCartHeader}>
        <h2>SHOPPING BAG (2)</h2>
        <CgCloseO
          className={css.closingIcon}
          onClick={() => {
            setOpenMyCart(false);
          }}
        ></CgCloseO>
      </div>
      <div className={css.myShoppingCartInfo}>
        <MyShoppingCartCard></MyShoppingCartCard>
        <MyShoppingCartCard></MyShoppingCartCard>
        <MyShoppingCartCard></MyShoppingCartCard>
        <div className={css.totalCountWrapper}>
          <h2>Total</h2>
          <h2>$ 50</h2>
        </div>
        <Button content="GO TO CHECKOUT"></Button>
      </div>
    </div>
  );
}

export default MyShoppingCartPage;
