import FilterButton from "../components/FilterButton";
import Card from "../components/Card";
import products from "../data/products";
import css from "./OutletPage.module.css";

function OutletPage() {
  const filteredOutlet = products
    .filter((item) => {
      return item.discount === true;
    })
    .map((outlet) => {
      return <Card key={outlet.id} {...outlet}></Card>;
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
