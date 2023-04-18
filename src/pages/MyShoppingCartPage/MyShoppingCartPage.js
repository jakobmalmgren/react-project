import { CgCloseO } from "react-icons/cg";
import css from "./MyShoppingCartPage.module.css";
import MyShoppingCartPageCard from "./components/MyShoppingCartPageCard";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";

function MyShoppingCartPage(props) {
  console.log(props); // kan inte ta de av här
  let myShoppingCartPageCard;
  if (props.boughtItems) {
    myShoppingCartPageCard = props.boughtItems.map((item) => {
      return (
        <MyShoppingCartPageCard
          {...item}
          onRemove={props.onRemove}
          onAdd={props.onAdd}
        ></MyShoppingCartPageCard>
      );
    });
  }
  return (
    <div className={css.myShoppingCart}>
      <div className={css.myShoppingCartHeader}>
        <h2>
          SHOPPING BAG(
          {props.boughtItems.length <= 0 ? 0 : props.boughtItems.length})
        </h2>
        <CgCloseO
          className={css.closingIcon}
          onClick={() => {
            props.setOpenMyShoppingCartPage(false);
          }}
        ></CgCloseO>
      </div>
      <div className={css.myShoppingCartInfo}>
        {props.boughtItems.length <= 0 ? (
          <div className={css.noItemsDiv}>
            <h4>YOUR CART IS EMPTY</h4>
          </div>
        ) : (
          ""
        )}
        {myShoppingCartPageCard}

        <Link to="/checkoutPage">
          {props.boughtItems.length <= 0 ? (
            ""
          ) : (
            <div>
              <div className={css.totalCountWrapper}>
                <h2>Total: ?????? </h2>
                <h2>$ ????????</h2>
              </div>
              <Button content="GO TO CHECKOUT"></Button>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default MyShoppingCartPage;
