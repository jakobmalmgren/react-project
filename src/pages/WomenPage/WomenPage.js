import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";
import css from "./WomenPage.module.css";

function WomenPage(props) {
  const filteredWomen = props.products
    .filter((item) => {
      return item.category === "women";
    })
    .filter((item) => {
      if (props.filterTextValue === "Pants") {
        return item.item === "PANTS";
      } else if (props.filterTextValue === "T-shirts")
        return item.item === "T-SHIRT";
      else if (props.filterTextValue === "Jackets")
        return item.item === "JACKET";
      else if (props.filterTextValue === "Shorts")
        return item.item === "SHORTS";
      else if (props.filterTextValue === "Shoes") return item.item === "SHOES";
      else if (props.filterTextValue === "Sweatshirts")
        return item.item === "SWEATSHIRT";
      else if (props.filterTextValue === "Discount")
        return item.discount === true;
      else return item;
    })
    .map((women) => {
      return (
        <Card
          key={women.id}
          {...women}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });

  return (
    <div>
      <h1>Women</h1>
      <FilterButton
        onFilterValueSelected={props.onFilterValueSelected}
      ></FilterButton>
      <div className={css.cardWrapper}>{filteredWomen}</div>
    </div>
  );
}

export default WomenPage;
