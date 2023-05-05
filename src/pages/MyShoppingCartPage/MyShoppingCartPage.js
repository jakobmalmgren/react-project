import { CgCloseO } from "react-icons/cg";
import css from "./MyShoppingCartPage.module.css";
import MyShoppingCartPageCard from "./components/MyShoppingCartPageCard";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";

function MyShoppingCartPage(props) {
  let myShoppingCartPageCard;
  if (props.boughtItems) {
    myShoppingCartPageCard = props.boughtItems.map((item) => {
      return (
        <MyShoppingCartPageCard
          {...item}
          deleteItems={props.deleteItems}
          handleDecrement={props.handleDecrement}
          handleIncrement={props.handleIncrement}
        ></MyShoppingCartPageCard>
      );
    });
  }

  return (
    <div
      className={
        props.openMyShoppingCartPage ? css.active : css.containerWrapper
      }
    >
      <div
        className={css.overlay}
        onClick={props.handleMyShoppingCartPage}
      ></div>

      <div className={css.myShoppingCart}>
        <div className={css.myShoppingCartHeader}>
          <h2>
            SHOPPING BAG(
            {props.boughtItems.length <= 0 ? 0 : props.boughtItems.length})
          </h2>
          <CgCloseO
            className={css.closingIcon}
            onClick={props.handleMyShoppingCartPage}
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

          {props.boughtItems.length <= 0 ? (
            ""
          ) : (
            <div>
              <div className={css.totalCountWrapper}>
                <div>
                  <h2>Products: ${props.sum.toFixed(2)}</h2>
                  <h2>Tax: $ {props.taxPrice.toFixed(2)} </h2>
                  <h2>Shipping fee: $ {props.shippingPrice.toFixed(2)}</h2>
                  {props.sum < 100 ? (
                    <h3>
                      ($ {props.amountToFreeShippingPrice.toFixed(2)} to free
                      shippingfee)
                    </h3>
                  ) : (
                    ""
                  )}
                  <h2>Total: $ {props.totalPrice.toFixed(2)}</h2>
                </div>
              </div>
              <Link to="/checkoutPage">
                <Button
                  content="GO TO CHECKOUT"
                  handleMyShoppingCartPage={props.handleMyShoppingCartPage}
                ></Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyShoppingCartPage;