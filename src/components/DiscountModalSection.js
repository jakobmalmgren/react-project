import { CgClose } from "react-icons/cg";
import css from "./DiscountModalSection.module.css";
function DiscountModalSection() {
  return (
    <div className={css.discountModalWrapper}>
      <div className={css.discountModal}>
        <p>Check out now & recieve</p>
        <h1>20 % OFF</h1>
        <h2>YOUR FIRST ORDER</h2>
        <p>Get 20% off your order when you join our newsletter</p>
        <input type="text" placeholder="Email adress" />
        <button>SUBSCRIBE NOW</button>
        <h2>Your deal expires in:</h2>
        <div className={css.timebox}>
          <div className={css.time}>1</div>
          <div className={css.time}>2</div>
          <div className={css.time}>1</div>
          <div className={css.time}>15</div>
        </div>
        <h3>Your Promocode is: YAYDISCOUNT</h3>
        <CgClose className={css.discountModalcloseicon}></CgClose>
      </div>
    </div>
  );
}

export default DiscountModalSection;
