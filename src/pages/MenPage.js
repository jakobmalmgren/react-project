import FilterButton from "../components/FilterButton";
import Card from "../components/Card";
import products from "../data/products";
import css from "./MenPage.module.css";

function MenPage() {
  const filteredMen = products
    .filter((item) => {
      return item.category === "men";
    })
    .map((men) => {
      return <Card key={men.id} {...men}></Card>;
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
