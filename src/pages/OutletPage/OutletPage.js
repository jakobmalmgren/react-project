import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";

import css from "./OutletPage.module.css";

function OutletPage(props) {
  const filteredOutlet = props.products
    .filter((item) => {
      return item.discount === true;
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
    .map((outlet) => {
      return (
        <Card
          key={outlet.id}
          {...outlet}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <h1>Outlet</h1>
      <FilterButton
        onFilterValueSelected={props.onFilterValueSelected}
      ></FilterButton>
      <div className={css.cardWrapper}> {filteredOutlet}</div>
    </div>
  );
}

export default OutletPage;
