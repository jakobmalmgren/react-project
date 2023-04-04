import Card from "../components/Card";
import css from "./MyFavoritePage.module.css";
function MyFavoritePage(props) {
  console.log(props);

  let cardItem;
  if (props.likedItems) {
    cardItem = props.likedItems.map((item) => {
      return <Card {...item}></Card>;
    });
  }

  return (
    <div>
      <h1>My Favorites</h1>
      {props.likedItems.length === 0 && (
        <div>YOU HAVE NO FAVORITE ITEMS YET</div>
      )}
      <div className={css.myFavoriteContainer}> {cardItem}</div>
    </div>
  );
}

export default MyFavoritePage;
