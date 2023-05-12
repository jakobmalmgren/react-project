import FilterButton from "../../components/Buttons/FilterButton";

import Card from "../../components/Cards/Card";
import css from "./KidsPage.module.css";
import { useState } from "react";
function KidsPage(props) {
  let [filterTextValueKids, setFilterTextValueKids] = useState("All");

  function onFilterValueSelectedKids(filterValue) {
    setFilterTextValueKids(filterValue);
  }
  function changeValueKids(e) {
    onFilterValueSelectedKids(e.target.value);
  }
  const [toggleFilterItemsKids, setToggleFilterItemsKids] = useState(false);
  const filteredKids = props.products
    .filter((item) => {
      return item.category === "boys" || item.category === "girls";
    })
    .filter((item) => {
      if (filterTextValueKids === "Pants") {
        return item.item === "PANTS";
      } else if (filterTextValueKids === "T-shirts")
        return item.item === "T-SHIRT";
      else if (filterTextValueKids === "Jackets") return item.item === "JACKET";
      else if (filterTextValueKids === "Shorts") return item.item === "SHORTS";
      else if (filterTextValueKids === "Shoes") return item.item === "SHOES";
      else if (filterTextValueKids === "Sweatshirts")
        return item.item === "SWEATSHIRT";
      else if (filterTextValueKids === "Discount")
        return item.discount === true;
      else return item;
    })
    .map((kid) => {
      return (
        <Card
          deleteLikedItems={props.deleteLikedItems}
          renderLikedItems={props.renderLikedItems}
          key={kid.id}
          {...kid}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div className={css.kidsPage}>
      <h1>Kids</h1>
      <div className={css.toggleBtnWrapper}>
        <div
          className={css.toggleBtn}
          onClick={() => {
            setToggleFilterItemsKids(!toggleFilterItemsKids);
          }}
        >
          <FilterButton></FilterButton>
        </div>

        <h3>{filteredKids.length}</h3>
        <p>products</p>
      </div>
      {toggleFilterItemsKids && (
        <div className={css.filterItems}>
          <select name="filter" onChange={changeValueKids}>
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

      <div className={css.cardWrapper}> {filteredKids}</div>
    </div>
  );
}

export default KidsPage;
