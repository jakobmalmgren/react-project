import Card from "../../components/Cards/Card";
import css from "./MyFavoritePage.module.css";

function MyFavoritePage(props) {
  // console.log(props.likedItems);
  let cardItem;
  if (props.likedItems) {
    cardItem = props.likedItems.map((item) => {
      return (
        <Card
          {...item}
          key={item.id}
          renderLikedItems={props.renderLikedItems}
          deleteLikedItems={props.deleteLikedItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  }

  return (
    // <div className={css.myFavoritePage}>
    //   <h1>My Favorites</h1>
    //   {props.likedItems.length === 0 && (
    //     <h4 className={css.noFavorite}>YOU HAVE NO FAVORITE ITEMS SAVED</h4>
    //   )}
    //   <div className={css.cardWrapper}> {cardItem}</div>
    // </div>

    //
    // <div className={css.myFavoritePage}>
    //   <h1>My Favorites</h1>
    //   {props.likedItems.length && props.likedItems.length === 0 && (
    //     <h4 className={css.noFavorite}>YOU HAVE NO FAVORITE ITEMS SAVED</h4>
    //   )}
    //   <div className={css.cardWrapper}> {cardItem}</div>
    // </div>
    <div className={css.myFavoritePage}>
      <h1>My Favorites</h1>

      {props.likedItems && props.likedItems.length >= 1 ? (
        ""
      ) : (
        <h4 className={css.noFavorite}>YOU HAVE NO FAVORITE ITEMS SAVED</h4>
      )}
      <div className={css.cardWrapper}> {cardItem}</div>
    </div>
  );
}

export default MyFavoritePage;
