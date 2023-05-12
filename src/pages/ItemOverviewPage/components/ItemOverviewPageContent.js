import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import css from "./ItemOverviewPageContent.module.css";
import { useState } from "react";
import { MdHeartBroken } from "react-icons/md";

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
    <div>
      <div className={css.addToCartPage}>
        <div className={css.imageContainer}>
          <div className={css.smallImageWrapper}>{smallImages}</div>
          <div className={css.bigImageWrapper}>
            <div className={css.positionDiscount}>
              <img src={`img/${bigImage}`} alt="" className={css.bigImage} />
              {discountIcon && (
                <h2 className={css.discountIcon}>{discountIcon}%</h2>
              )}
              <div className={css.heartIconWrapper}>
                <div
                  className={css.heartIcon}
                  onClick={() => {
                    props.renderLikedItems(props);
                  }}
                >
                  <VscHeart></VscHeart>
                </div>
                <div
                  className={css.heartIcon}
                  onClick={() => {
                    props.deleteLikedItems(props);
                  }}
                >
                  <MdHeartBroken></MdHeartBroken>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.sectionInfo}>
          <h4 className={css.header}>{props.description}</h4>
          <div className={css.priceWrapper}>
            {discountIcon && (
              <p className={css.itemValue}>${itemValue.toFixed(2)}</p>
            )}
            {discountIcon ? (
              <p className={css.cardPriceDiscount}>$ {props.price}</p>
            ) : (
              <p className={css.cardPrice}>$ {props.price}</p>
            )}
          </div>
          <div className={css.addToFav}></div>

          <button
            className={css.addToCartBtn}
            onClick={() => {
              props.onAdd(props);
            }}
          >
            <BsCart3></BsCart3>ADD TO CART
          </button>

          <div className={css.addToCartInfo}>
            <h4>Product type :</h4>
            <p> {props.item}</p>

            <h4>Category: </h4>
            <p> {props.category}</p>

            <h4>Additional information:</h4>
            <p> {props.about}</p>

            <h4 className={css.faq}>FAQ</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemOverviewPageContent;
