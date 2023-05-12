import products from "../../data/products";
import css from "./SearchProductsPage.module.css";
import Card from "../../components/Cards/Card";

function SearchProductsPage(props) {
  const productsFilter = products
    .filter((item) => {
      if (props.search === "") {
        return item;
      } else if (
        item.description.toLowerCase().includes(props.search.toLowerCase())
      ) {
        return item;
      }
    })
    .map((item) => {
      return (
        <Card
          {...item}
          deleteLikedItems={props.deleteLikedItems}
          renderLikedItems={props.renderLikedItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div className={css.searchFilterWrapper}>
      <h1>Products</h1>

      <div className={css.cardWrapper}> {productsFilter}</div>
    </div>
  );
}

export default SearchProductsPage;
