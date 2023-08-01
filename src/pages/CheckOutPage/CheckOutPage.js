import css from "./CheckoutPage.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
function CheckoutPage(props) {
  const [text, setText] = useState("");
  function updateText() {
    setTimeout(() => {
      setText("Waiting....");
    });
    setTimeout(() => {
      setText("Your purchase was succesful!");
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
        <div className={css.checkoutPageImgWrapper}>
          <Link to="/ItemOverviewPage">
            <img
              src={`img/${item.image[0]}`}
              alt=""
              onClick={() => {
                props.addItemToCart(item);
              }}
            />
          </Link>
          {discountIcon && (
            <h2 className={css.discountIcon}>{discountIcon}%</h2>
          )}
        </div>

        <div className={css.checkoutPageItemsWrapper}>
          <p className={css.cardDescription}>{item.description}</p>

          <div className={css.priceWrapper}>
            {discountIcon && (
              <p className={css.itemValue}>${itemValue.toFixed(0)}</p>
            )}
            {discountIcon ? (
              <p className={css.cardPriceDiscount}>$ {item.price}</p>
            ) : (
              <p className={css.cardPrice}>$ {item.price}</p>
            )}
          </div>
          <h3 className={css.cardItem}>{item.item}</h3>
          <p>{item.category}</p>

          <div className={css.totalSection}>
            <button
              className={css.plusMinusBtn}
              onClick={() => {
                props.handleDecrement(item);
              }}
            >
              <BiMinus></BiMinus>
            </button>
            <p className={css.quantityArea}>{item.qty}</p>

            <button
              className={css.plusMinusBtn}
              onClick={() => {
                props.handleIncrement(item);
              }}
            >
              <BiPlus></BiPlus>
            </button>
          </div>
          <h2>$ {item.price * item.qty}</h2>
        </div>
        <BsFillTrashFill
          className={css.deleteIcon}
          onClick={() => {
            props.deleteItems(item);
          }}
        ></BsFillTrashFill>
      </div>
    );
  });

  return (
    <div>
      {/* <div className={css.checkOutPageContainer}>
        {checkout}
        {props.boughtItems.length > 0 ? (
          <div className={css.checkoutPriceContainer}>
            <h2>Products: $ {props.sum.toFixed(0)} </h2>
            <h2>Tax: $ {props.taxPrice.toFixed(0)} </h2>
            <div className={css.shippingWrapper}>
              <h2>Shipping fee: $ {props.shippingPrice.toFixed(0)} </h2>
              {props.sum < 100 ? (
                <h4>$ {props.amountToFreeShippingPrice} to no shipping fee</h4>
              ) : (
                ""
              )}
            </div>
            <h2>Total: $ {props.totalPrice.toFixed(0)}</h2>

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
          <h1 className={css.noItemsText}>YOU HAVE NO ITEMS</h1>
        )}
      </div> */}
      <div className={css.checkOutPageContainer}>
        {checkout}
        {props.boughtItems && props.boughtItems.length > 0 ? (
          <div className={css.checkoutPriceContainer}>
            <h2>Products: $ {props.sum.toFixed(0)} </h2>
            <h2>Tax: $ {props.taxPrice.toFixed(0)} </h2>
            <div className={css.shippingWrapper}>
              <h2>Shipping fee: $ {props.shippingPrice.toFixed(0)} </h2>
              {props.sum < 100 ? (
                <h4>$ {props.amountToFreeShippingPrice} to no shipping fee</h4>
              ) : (
                ""
              )}
            </div>
            <h2>Total: $ {props.totalPrice.toFixed(0)}</h2>

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
          <h1 className={css.noItemsText}>YOU HAVE NO ITEMS</h1>
        )}
      </div>

      <h1 className={css.purchasedText}>{text}</h1>
    </div>
  );
}

export default CheckoutPage;
