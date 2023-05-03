import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import css from "./ItemOverviewPageContent.module.css";
import { useState } from "react";
// import { VscHeartFilled } from "react-icons/vsc";

function ItemOverviewPageContent(props) {
  let discountIcon;
  if (props.discount === true) {
    discountIcon = props.discountValue;
  }
  const itemValue = (props.price / ((100 - props.discountValue) / 10)) * 10;

  const [bigImage, setBigImage] = useState(props.image[0]);
  function handleClick(index) {
    setBigImage(props.image[index]);
  }

  const smallImages = props.image.map((item, index) => {
    return (
      <div>
        <img
          className={css.smallImage}
          src={`img/${item}`}
          alt=""
          onClick={() => {
            handleClick(index);
          }}
        />
      </div>
    );
  });

  return (
    <div className={css.addToCartPage}>
      <div className={css.imageContainer}>
        <div className={css.smallImageWrapper}>{smallImages}</div>
        <div className={css.bigImageWrapper}>
          <img src={`img/${bigImage}`} alt="" className={css.bigImage} />
          {discountIcon && (
            <h2 className={css.discountIcon}>{discountIcon}%</h2>
          )}
          {discountIcon && (
            <p className={css.itemValue}>
              {/* ${(props.price / ((100 - props.discountValue) / 10)) * 10} */}
              ${itemValue.toFixed(2)}
            </p>
          )}
        </div>
      </div>
      <div className={css.sectionInfo}>
        <h4 className={css.header}>{props.description}</h4>

        {discountIcon ? (
          <p className={css.cardPriceDiscount}>$ {props.price}</p>
        ) : (
          <p className={css.cardPrice}>$ {props.price}</p>
        )}

        <div className={css.addToCartBtnWrapper}>
          <button
            className={css.addToCartBtn}
            onClick={() => {
              props.onAdd(props);
            }}
          >
            <BsCart3></BsCart3>ADD TO CART
          </button>
        </div>

        <div className={css.addToFav}>
          <div className={css.heartIcon}>
            <VscHeart></VscHeart>
          </div>
          <p>ADD TO FAVORITES</p>
        </div>
        <div className={css.addToCartInfo}>
          <h4>Product type :</h4>
          {props.item}
          <h4>Category: </h4>
          {props.category}

          <h4>Additional information:</h4>
          {props.about}

          <h4>FAQ</h4>
        </div>
      </div>
    </div>
  );
}

export default ItemOverviewPageContent;
