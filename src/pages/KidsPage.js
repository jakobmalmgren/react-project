import FilterButton from "../components/FilterButton";
import products from "../data/products";
import Card from "../components/Card";
import css from "./KidsPage.module.css";
function KidsPage() {
  const filteredKids = products
    .filter((item) => {
      return item.category === "boys" || item.category === "girls";
    })
    .map((kid) => {
      return <Card key={kid.id} {...kid}></Card>;
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
