import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";
import products from "../../data/products";
import css from "./WomenPage.module.css";

function WomenPage(props) {
  const filteredWomen = products
    .filter((item) => {
      return item.category === "women";
    })
    .map((women) => {
      return (
        <Card
          key={women.id}
          {...women}
          renderItems={props.renderItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <h1>Women</h1>
      <FilterButton></FilterButton>
      <div className={css.cardWrapper}>{filteredWomen}</div>
    </div>
  );
}

export default WomenPage;
