import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import css from "./AddToCartPage.module.css";

function AddToCartPage() {
  return (
    <div className={css.addToCartPage}>
      <div className={css.imageContainer}>
        <div className={css.smallImageWrapper}>
          <img
            src="/img/conm7650c_copticalwhite_v102.jpg"
            alt=""
            className={css.smallImage}
          />
          <img src="/img/converesebig.jpeg" alt="" className={css.smallImage} />
        </div>

        <img src="/img/converesebig.jpeg" alt="" className={css.bigImage} />
      </div>
      <div className={css.sectionInfo}>
        <h3>Men Hat</h3>
        <h3>$ 40</h3>
        <div className={css.plusMinusWrapper}>
          <button className={css.plusMinusBtn}>
            <BiMinus></BiMinus>
          </button>
          <p>5</p>
          <button className={css.plusMinusBtn}>
            <BiPlus></BiPlus>
          </button>
        </div>
        <div className={css.addToCartBtnWrapper}>
          <button className={css.addToCartBtn}>
            <BsCart3></BsCart3>ADD TO CART
          </button>
        </div>

        <div className={css.addToFav}>
          <VscHeart></VscHeart> <p>ADD TO FAVORITES</p>
        </div>
        <div className={css.addToCartInfo}>
          <h4>Product type : Polo</h4>
          <h4>Tag: T-shirt, Woman, top</h4>

          <h4>
            DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aliquid, quisquam.
          </h4>
          <h4>
            ADDITIONAL INFORMATION: Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Molestias, numquam.
          </h4>
          <h4>FAQ</h4>
        </div>
      </div>
    </div>
  );
}

export default AddToCartPage;
