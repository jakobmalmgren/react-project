import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import css from "./ItemOverviewPageContent.module.css";
// import { VscHeartFilled } from "react-icons/vsc";

function ItemOverviewPageContent(props) {
  return (
    <div className={css.addToCartPage}>
      <div className={css.imageContainer}>
        <div className={css.smallImageWrapper}>
          <img
            src={`img/${props.image.img2}`}
            alt=""
            className={css.smallImage}
          />
          <img
            src={`img/${props.image.img1}`}
            alt=""
            className={css.smallImage}
          />
        </div>

        <img src={`img/${props.image.img1}`} alt="" className={css.bigImage} />
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

        <div className={css.addToFav}>
          <div
            className={css.heartIcon}
            onClick={() => {
              props.renderItems(props);
            }}
          >
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
