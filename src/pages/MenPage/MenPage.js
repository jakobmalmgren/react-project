import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";

import css from "./MenPage.module.css";
import { useState } from "react";

function MenPage(props) {
  let [filterTextValueMen, setFilterTextValueMen] = useState("All");

  function onFilterValueSelectedMen(filterValue) {
    setFilterTextValueMen(filterValue);
  }
  function changeValueMen(e) {
    onFilterValueSelectedMen(e.target.value);
  }
  const [toggleFilterItemsMen, setToggleFilterItemsMen] = useState(false);
  const filteredMen = props.products
    .filter((item) => {
      return item.category === "men";
    })
    .filter((item) => {
      if (filterTextValueMen === "Pants") {
        return item.item === "PANTS";
      } else if (filterTextValueMen === "T-shirts")
        return item.item === "T-SHIRT";
      else if (filterTextValueMen === "Jackets") return item.item === "JACKET";
      else if (filterTextValueMen === "Shorts") return item.item === "SHORTS";
      else if (filterTextValueMen === "Shoes") return item.item === "SHOES";
      else if (filterTextValueMen === "Sweatshirts")
        return item.item === "SWEATSHIRT";
      else if (filterTextValueMen === "Discount") return item.discount === true;
      else return item;
    })
    .map((men) => {
      return (
        <Card key={men.id} {...men} addItemToCart={props.addItemToCart}></Card>
      );
    });

  return (
    <div>
      <h1>Men</h1>
      <div
        onClick={() => {
          setToggleFilterItemsMen(!toggleFilterItemsMen);
        }}
      >
        <FilterButton></FilterButton>
      </div>

      {toggleFilterItemsMen && (
        <div className={css.filterItems}>
          <select name="filter" onChange={changeValueMen}>
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

      <div className={css.cardWrapper}> {filteredMen}</div>
    </div>
  );
}

export default MenPage;
