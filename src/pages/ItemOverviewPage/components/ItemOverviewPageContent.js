import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import css from "./ItemOverviewPageContent.module.css";
import { useState } from "react";
// import { VscHeartFilled } from "react-icons/vsc";

function ItemOverviewPageContent(props) {
  console.log(props);
  let discountIcon;
  if (props.discount === true) {
    discountIcon = "30%";
  }

  const [bigImage, setBigImage] = useState(props.image[0]);
  function handleClick(index) {
    console.log(index);

    setBigImage(props.image[index]);
  }

  const images = props.image.map((item, index) => {
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
        <div className={css.smallImageWrapper}>
          {images}
          {/* <img
            src={`img/${props.image.img2}`}
            alt=""
            className={css.smallImage}
          />
          <img
            src={`img/${props.image.img1}`}
            alt=""
            className={css.smallImage}
          /> */}
        </div>

        {/* <img src={`img/${props.image.img1}`} alt="" className={css.bigImage} /> */}
        <img src={`img/${bigImage}`} alt="" className={css.bigImage} />
      </div>
      <div className={css.sectionInfo}>
        <h4 className={css.header}>{props.description}</h4>
        <h4 className={css.header}>$ {props.price}</h4>

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
        {discountIcon && <div className={css.discountIcon}>{discountIcon}</div>}

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
