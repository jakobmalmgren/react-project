import { CgCloseO } from "react-icons/cg";
import css from "./MyShoppingCartPage.module.css";
import MyShoppingCartPageCard from "./components/MyShoppingCartPageCard";

import { Link } from "react-router-dom";

function MyShoppingCartPage(props) {
  let myShoppingCartPageCard;
  if (props.boughtItems) {
    myShoppingCartPageCard = props.boughtItems.map((item) => {
      return (
        <MyShoppingCartPageCard
          addItemToCart={props.addItemToCart}
          {...item}
          key={item.id}
          deleteItems={props.deleteItems}
          handleDecrement={props.handleDecrement}
          handleIncrement={props.handleIncrement}
          handleMyShoppingCartPage={props.handleMyShoppingCartPage}
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
                  <h2>Products: ${props.sum.toFixed(0)}</h2>
                  <h2>Tax: $ {props.taxPrice.toFixed(0)} </h2>
                  <h2>Shipping fee: $ {props.shippingPrice.toFixed(0)}</h2>
                  {props.sum < 100 ? (
                    <h4>
                      $ {props.amountToFreeShippingPrice.toFixed(0)} to no
                      shipping fee
                    </h4>
                  ) : (
                    ""
                  )}
                  <h2>Total: $ {props.totalPrice.toFixed(0)}</h2>
                </div>
              </div>
              <Link to="/checkoutPage">
                <button
                  className={css.goToCheckoutBtn}
                  onClick={props.handleMyShoppingCartPage}
                >
                  GO TO CHECKOUT
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyShoppingCartPage;
