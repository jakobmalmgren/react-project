import FilterButton from "../../components/Buttons/FilterButton";
import Card from "../../components/Cards/Card";
import css from "./WomenPage.module.css";
import { useState } from "react";

function WomenPage(props) {
  let [filterTextValueWomen, setFilterTextValueWomen] = useState("All");

  function onFilterValueSelectedWomen(filterValue) {
    setFilterTextValueWomen(filterValue);
  }
  function changeValueWomen(e) {
    onFilterValueSelectedWomen(e.target.value);
  }
  const [toggleFilterItemsWomen, setToggleFilterItemsWomen] = useState(false);

  const filteredWomen = props.products
    .filter((item) => {
      return item.category === "women";
    })
    .filter((item) => {
      if (filterTextValueWomen === "Pants") {
        return item.item === "PANTS";
      } else if (filterTextValueWomen === "T-shirts")
        return item.item === "T-SHIRT";
      else if (filterTextValueWomen === "Jackets")
        return item.item === "JACKET";
      else if (filterTextValueWomen === "Shorts") return item.item === "SHORTS";
      else if (filterTextValueWomen === "Shoes") return item.item === "SHOES";
      else if (filterTextValueWomen === "Sweatshirts")
        return item.item === "SWEATSHIRT";
      else if (filterTextValueWomen === "Discount")
        return item.discount === true;
      else return item;
    })
    .map((women) => {
      return (
        <Card
          key={women.id}
          {...women}
          addItemToCart={props.addItemToCart}
          deleteLikedItems={props.deleteLikedItems}
          renderLikedItems={props.renderLikedItems}
        ></Card>
      );
    });

  return (
    <div className={css.womenPage}>
      <h1>Women</h1>
      <div className={css.toggleBtnWrapper}>
        <div
          className={css.toggleBtn}
          onClick={() => {
            setToggleFilterItemsWomen(!toggleFilterItemsWomen);
          }}
        >
          <FilterButton></FilterButton>
        </div>
        <h3>{filteredWomen.length}</h3>
        <p>products</p>
      </div>

      {toggleFilterItemsWomen && (
        <div className={css.filterItems}>
          <select name="filter" onChange={changeValueWomen}>
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

      <div className={css.cardWrapper}>{filteredWomen}</div>
    </div>
  );
}

export default WomenPage;
