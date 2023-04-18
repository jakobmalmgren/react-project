import css from "./CheckoutPage.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
function CheckoutPage(props) {
  const checkout = props.boughtItems.map((item) => {
    return (
      <div className={css.checkoutPageWrapper}>
        <div className={css.checkoutPageItems}>
          <div className={css.checkoutPageImgWrapper}>
            <img src={`img/${item.image.img1}`} alt="" />
          </div>

          <div className={css.checkoutPageCategories}>
            <h3>{item.description}</h3>
            <p>{item.item}</p>
            <p>$ {item.price}</p>
            <p>{item.category}</p>
          </div>

          <BsFillTrashFill
            className={css.deleteIcon}
            onClick={() => {
              props.onRemove(item);
            }}
          ></BsFillTrashFill>
        </div>
        <div className={css.totalSection}>
          <button>
            <BiMinus></BiMinus>
          </button>
          <p>?????</p>
          <button>
            <BiPlus></BiPlus>
          </button>

          <h2>$ total?????</h2>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>My Items</h1>

      <div className={css.checkOutPageContainer}>
        {props.boughtItems.length > 0 ? "" : <h1>YOU HAVE NO ITEMS</h1>}
        {checkout}

        <h3>Total Amount:</h3>
        <button>PURCHASE</button>
      </div>
    </div>
  );
}

export default CheckoutPage;
