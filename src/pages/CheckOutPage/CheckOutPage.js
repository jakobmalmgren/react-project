import css from "./CheckoutPage.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";
function CheckoutPage(props) {
  const [text, setText] = useState("");
  function updateText() {
    setTimeout(() => {
      setText("WAITING....");
    });
    setTimeout(() => {
      setText("YOUR PURCHASE WAS SUCCESFULL!");
      props.setBoughtItems([]);
    }, 5000);
  }

  const checkout = props.boughtItems.map((item) => {
    let discountIcon;
    if (item.discount === true) {
      discountIcon = item.discountValue;
    }
    const itemValue = (item.price / ((100 - item.discountValue) / 10)) * 10;
    return (
      <div className={css.checkoutPageWrapper}>
        <div className={css.checkoutPageItems}>
          <div className={css.checkoutPageImgWrapper}>
            <img src={`img/${item.image[0]}`} alt="" />
            {discountIcon && (
              <h2 className={css.discountIcon}>{discountIcon}%</h2>
            )}
          </div>

          <div className={css.checkoutPageCategories}>
            <h3>{item.description}</h3>
            <p>{item.item}</p>

            {discountIcon && (
              <p className={css.itemValue}>
                {/* ${(item.price / ((100 - item.discountValue) / 10)) * 10} */}
                ${itemValue.toFixed(2)}
              </p>
            )}
            {discountIcon ? (
              <p className={css.cardPriceDiscount}>$ {item.price}</p>
            ) : (
              <p className={css.cardPrice}>$ {item.price}</p>
            )}
            <p>{item.category}</p>
          </div>

          <BsFillTrashFill
            className={css.deleteIcon}
            onClick={() => {
              props.deleteItems(item);
            }}
          ></BsFillTrashFill>
        </div>
        <div className={css.totalSection}>
          <button
            className={css.itemBtn}
            onClick={() => {
              props.handleDecrement(item);
            }}
          >
            <BiMinus></BiMinus>
          </button>
          <p>{item.qty}</p>
          <button
            className={css.itemBtn}
            onClick={() => {
              props.handleIncrement(item);
            }}
          >
            <BiPlus></BiPlus>
          </button>

          <h2>$ {item.price * item.qty}</h2>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={css.checkOutPageContainer}>
        {checkout}
        {props.boughtItems.length > 0 ? (
          <div>
            <h2>Products: $ {props.sum.toFixed(2)} </h2>
            <h2>Tax: $ {props.taxPrice.toFixed(2)} </h2>
            <div className={css.shippingWrapper}>
              <h2>Shipping fee: $ {props.shippingPrice.toFixed(2)} </h2>
              {props.sum < 100 ? (
                <h3>
                  ($ {props.amountToFreeShippingPrice} to free shippingfee)
                </h3>
              ) : (
                ""
              )}
            </div>
            <h2>Total: $ {props.totalPrice.toFixed(2)}</h2>

            <button
              className={css.purchaseBtn}
              onClick={() => {
                updateText();
              }}
            >
              PURCHASE
            </button>
          </div>
        ) : (
          <h1>YOU HAVE NO ITEMS</h1>
        )}
      </div>

      <h1 className={css.purchasedText}>{text}</h1>
    </div>
  );
}

export default CheckoutPage;
