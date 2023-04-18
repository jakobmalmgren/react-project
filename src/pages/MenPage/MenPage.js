import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";

import css from "./MenPage.module.css";

function MenPage(props) {
  const filteredMen = props.products
    .filter((item) => {
      return item.category === "men";
    })
    .map((men) => {
      return (
        <Card
          key={men.id}
          {...men}
          renderItems={props.renderItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <h1>Men</h1>
      <FilterButton></FilterButton>
      <div className={css.cardWrapper}> {filteredMen}</div>
    </div>
  );
}

export default MenPage;
