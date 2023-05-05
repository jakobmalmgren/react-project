import products from "../../data/products";
import Card from "../../components/Cards/Card";
import css from "./SearchProductsPage.module.css";
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
      return <Card {...item}></Card>;
    });
  return <div className={css.productsFilterWrapper}>{productsFilter}</div>;
}

export default SearchProductsPage;
