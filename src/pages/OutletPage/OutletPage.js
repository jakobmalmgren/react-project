import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";
import { useState } from "react";
import css from "./OutletPage.module.css";

function OutletPage(props) {
  let [filterTextValueOutlet, setFilterTextValueOutlet] = useState("All");

  function onFilterValueSelectedOutlet(filterValue) {
    setFilterTextValueOutlet(filterValue);
  }
  function changeValueOutlet(e) {
    onFilterValueSelectedOutlet(e.target.value);
  }
  const [toggleFilterItemsOutlet, setToggleFilterItemsOutlet] = useState(false);
  const filteredOutlet = props.products
    .filter((item) => {
      return item.discount === true;
    })
    .filter((item) => {
      if (filterTextValueOutlet === "Pants") {
        return item.item === "PANTS";
      } else if (filterTextValueOutlet === "T-shirts")
        return item.item === "T-SHIRT";
      else if (filterTextValueOutlet === "Jackets")
        return item.item === "JACKET";
      else if (filterTextValueOutlet === "Shorts")
        return item.item === "SHORTS";
      else if (filterTextValueOutlet === "Shoes") return item.item === "SHOES";
      else if (filterTextValueOutlet === "Sweatshirts")
        return item.item === "SWEATSHIRT";
      else if (filterTextValueOutlet === "Discount")
        return item.discount === true;
      else return item;
    })
    .map((outlet) => {
      return (
        <Card
          deleteLikedItems={props.deleteLikedItems}
          renderLikedItems={props.renderLikedItems}
          key={outlet.id}
          {...outlet}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div className={css.outletPage}>
      <h1>Outlet</h1>
      <div className={css.toggleBtnWrapper}>
        <div
          className={css.toggleBtn}
          onClick={() => {
            setToggleFilterItemsOutlet(!toggleFilterItemsOutlet);
          }}
        >
          <FilterButton></FilterButton>
        </div>
        <h3>{filteredOutlet.length}</h3>
        <p>products</p>
      </div>
      {toggleFilterItemsOutlet && (
        <div className={css.filterItems}>
          <select name="filter" onChange={changeValueOutlet}>
            <option value="All">All</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
            <option value="T-shirts">T-shirts</option>
            <option value="Jackets">Jackets</option>
            <option value="Shorts">Shorts</option>
            <option value="Sweatshirts">Sweatshirts</option>
            <option value="Discount">Discount</option>
          </select>
        </div>
      )}
      <div className={css.cardWrapper}> {filteredOutlet}</div>
    </div>
  );
}

export default OutletPage;
