import FilterButton from "../../components/Buttons/FilterButton";

import Card from "../../components/Cards/Card";
import css from "./KidsPage.module.css";
function KidsPage(props) {
  const filteredKids = props.products
    .filter((item) => {
      return item.category === "boys" || item.category === "girls";
    })
    .map((kid) => {
      return (
        <Card
          key={kid.id}
          {...kid}
          renderItems={props.renderItems}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <h1>Kids</h1>

      <FilterButton></FilterButton>

      <div className={css.cardWrapper}> {filteredKids}</div>
    </div>
  );
}

export default KidsPage;
