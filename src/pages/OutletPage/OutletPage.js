import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";

import css from "./OutletPage.module.css";

function OutletPage(props) {
  const filteredOutlet = props.products
    .filter((item) => {
      return item.discount === true;
    })
    .map((outlet) => {
      return (
        <Card
          key={outlet.id}
          {...outlet}
          renderItems={props.renderItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <h1>Outlet</h1>
      <FilterButton></FilterButton>
      <div className={css.cardWrapper}> {filteredOutlet}</div>
    </div>
  );
}

export default OutletPage;
