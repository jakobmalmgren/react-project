import "./App.css";
import NavbarSection from "./components/Navbar/NavbarSection";
import RatingSlider from "./components/Footer/RatingSliderSection";
import IndexPage from "./pages/IndexPage/IndexPage";
import { Switch, Route } from "react-router-dom";
import FooterSection from "./components/Footer/FooterSection";
import WomenPage from "./pages/WomenPage/WomenPage";
import MenPage from "./pages/MenPage/MenPage";
import KidsPage from "./pages/KidsPage/KidsPage";
import OutletPage from "./pages/OutletPage/OutletPage";
import MyFavoritePage from "./pages/MyFavoritePage/MyFavoritePage";
import { useState } from "react";
import ItemOverviewPage from "./pages/ItemOverviewPage/ItemOverviewPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import products from "./data/products";
import { useEffect } from "react";

function App() {
  const [toggleBurger, setToggleBurger] = useState(false); // öppnar/stännger Burgermenu
  const [openMyShoppingCartPage, setOpenMyShoppingCartPage] = useState(false); // öppnar/stänger myshoppingcartpage
  function handleMyShoppingCartPage() {
    setOpenMyShoppingCartPage(!openMyShoppingCartPage); // öppnar/stänger myshoppingcartpage function
  }

  // -----------------------läggeer till i itemoverviewpage!
  const [addToCart, setAddToCart] = useState([]);
  function addItemToCart(products) {
    setAddToCart([products]);
  }

  //----------------------------------------------

  //--------------------------lägger till MyfavoritePage
  //lägga toll localstorage här me...som ja gjrde innan..
  function renderLikedItems(item) {
    const exist = likedItems.find((x) => {
      return item.id === x.id;
    });
    if (exist) {
      setLikedItems([...item]);
    } else {
      setLikedItems([...likedItems, item]);
    } //kolla bought items kanske kan göra samma
  }
  const [likedItems, setLikedItems] = useState([]);
  const [heart, setHeart] = useState(false);

  //----------------------------------------------------

  //------------------lägger till va man valt att köpa i myshoppingcartpage MED state!
  const getMyCartFromLocalStorage = JSON.parse(
    localStorage.getItem("myShoppingCart")
  );
  const [boughtItems, setBoughtItems] = useState(getMyCartFromLocalStorage);

  function onAdd(item) {
    const exist = boughtItems.find((x) => {
      return x.id === item.id;
    });
    if (exist) {
      setBoughtItems(
        boughtItems.map((x) => {
          return [...x];
        })
      );
    } else {
      setBoughtItems([...boughtItems, { ...item, qty: 1 }]);
    }
  }
  useEffect(() => {
    localStorage.setItem("myShoppingCart", JSON.stringify(boughtItems));
  }, [boughtItems]);

  //lägger till o tar bor antalet items----------------------------
  function handleDecrement(product) {
    setBoughtItems(
      boughtItems.map((item) => {
        if (item.qty < 2) {
          return { ...item, qty: 1 };
        } else {
          return product.id === item.id ? { ...item, qty: item.qty - 1 } : item;
        }
      })
    );
  }
  function handleIncrement(product) {
    setBoughtItems(
      boughtItems.map((item) => {
        return product.id === item.id ? { ...item, qty: item.qty + 1 } : item;
      })
    );
  }
  //--deletar item--------------------------------------------------------------

  function deleteItems(product) {
    setBoughtItems(
      boughtItems.filter((item) => {
        return item.id !== product.id;
      })
    );
  }

  /////----------------- plugga denna..viktigt! varför [] i else o {} i första..
  // addar sumering cash av allt_------------------

  const sum = boughtItems.reduce((acc, cu) => {
    return acc + cu.price * cu.qty;
  }, 0);
  const taxPrice = sum * 0.15;
  // let shippingPrice;
  // if (sum < 100) {
  //   shippingPrice = 100 - sum;
  //   // console.log((shippingPrice = 100 - sum));
  // } else if (sum > 100) {
  //   shippingPrice = 0;
  // borde kunna göra en funcion me allt detta i ett ju?????????????????
  // }
  const shippingPrice = sum >= 100 ? 0 : 15.9;
  const amountToFreeShippingPrice = 100 - sum;
  const totalPrice = sum + taxPrice + shippingPrice;

  //------------------------------------------------------------

  let [filterTextValue, setFilterTextValue] = useState("All");

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }

  //-------------------------------------
  const [openSignIn, setOpenSignIn] = useState(false); // öppnar stänger signInpage o fixar så modal kmr o ingen scroll
  //i bode signinpage OCH myshoppingcartpage...
  //men vill fixa annnrolunda här under o nå body o ändra classname dynamisk

  if (openSignIn || openMyShoppingCartPage) {
    //prevent from scrolling
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  function handleSignIn() {
    setOpenSignIn(!openSignIn);
  }
  //--------------------------------------------------------------------

  return (
    <div>
      <NavbarSection
        handleMyShoppingCartPage={handleMyShoppingCartPage}
        openMyShoppingCartPage={openMyShoppingCartPage}
        //-------------------------------
        sum={sum}
        taxPrice={taxPrice}
        shippingPrice={shippingPrice}
        totalPrice={totalPrice}
        amountToFreeShippingPrice={amountToFreeShippingPrice}
        //---------------------------
        handleSignIn={handleSignIn}
        openSignIn={openSignIn}
        setOpenSignIn={setOpenSignIn}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        deleteItems={deleteItems}
        likedItems={likedItems}
        boughtItems={boughtItems}
        toggleBurger={toggleBurger}
        setToggleBurger={setToggleBurger}
        onAdd={onAdd}
      ></NavbarSection>

      <Switch>
        <Route exact path="/">
          <IndexPage
            renderLikedItems={renderLikedItems}
            addItemToCart={addItemToCart}
            products={products}
          ></IndexPage>
        </Route>
        <Route path="/womenPage">
          <WomenPage
            onFilterValueSelected={onFilterValueSelected}
            setFilterTextValue={setFilterTextValue}
            filterTextValue={filterTextValue}
            addItemToCart={addItemToCart}
            products={products}
          ></WomenPage>
        </Route>
        <Route path="/menPage">
          <MenPage
            products={products}
            addItemToCart={addItemToCart}
            onFilterValueSelected={onFilterValueSelected}
            setFilterTextValue={setFilterTextValue}
            filterTextValue={filterTextValue}
          ></MenPage>
        </Route>
        <Route path="/kidsPage">
          <KidsPage
            onFilterValueSelected={onFilterValueSelected}
            setFilterTextValue={setFilterTextValue}
            filterTextValue={filterTextValue}
            products={products}
            addItemToCart={addItemToCart}
          ></KidsPage>
        </Route>
        <Route path="/outletPage">
          <OutletPage
            onFilterValueSelected={onFilterValueSelected}
            setFilterTextValue={setFilterTextValue}
            filterTextValue={filterTextValue}
            products={products}
            addItemToCart={addItemToCart}
          ></OutletPage>
        </Route>
        <Route path="/MyFavoritesPage">
          <MyFavoritePage likedItems={likedItems}></MyFavoritePage>
        </Route>
        <Route path="/ItemOverviewPage">
          <ItemOverviewPage
            onAdd={onAdd}
            addToCart={addToCart}
          ></ItemOverviewPage>
        </Route>
        <Route path="/checkoutPage">
          <CheckOutPage
            //---------------------
            sum={sum}
            taxPrice={taxPrice}
            shippingPrice={shippingPrice}
            totalPrice={totalPrice}
            amountToFreeShippingPrice={amountToFreeShippingPrice}
            //-------------------
            setBoughtItems={setBoughtItems}
            products={products}
            boughtItems={boughtItems}
            deleteItems={deleteItems}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          ></CheckOutPage>
        </Route>
      </Switch>

      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
