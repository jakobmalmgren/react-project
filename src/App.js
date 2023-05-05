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

import SearchProductsPage from "./pages/SearchProductsPage/SearchProductsPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";

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

  function toggleHeart() {
    setHeart(!heart);
  }
  console.log(heart);

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
  const shippingPrice = sum >= 100 ? 0 : 15.9;
  const amountToFreeShippingPrice = 100 - sum;
  const totalPrice = sum + taxPrice + shippingPrice;

  //------------------------------------------------------------

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
  const [search, setSearch] = useState(""); // fixar sökaproductsida

  //----------------------------
  console.log(search);
  return (
    <div>
      <NavbarSection
        handleMyShoppingCartPage={handleMyShoppingCartPage}
        openMyShoppingCartPage={openMyShoppingCartPage}
        sum={sum}
        taxPrice={taxPrice}
        shippingPrice={shippingPrice}
        totalPrice={totalPrice}
        amountToFreeShippingPrice={amountToFreeShippingPrice}
        //---------------------------
        setSearch={setSearch}
        //-
        likedItems={likedItems}
        // products={products}
        handleSignIn={handleSignIn}
        openSignIn={openSignIn}
        setOpenSignIn={setOpenSignIn}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        deleteItems={deleteItems}
        boughtItems={boughtItems}
        toggleBurger={toggleBurger}
        setToggleBurger={setToggleBurger}
        onAdd={onAdd}
      ></NavbarSection>

      <Switch>
        {search === "" ? (
          <Route exact path="/">
            <IndexPage
              addItemToCart={addItemToCart}
              products={products}
            ></IndexPage>
          </Route>
        ) : (
          <SearchProductsPage search={search}></SearchProductsPage>
        )}
        {/* <Route exact path="/">
          <IndexPage
            renderLikedItems={renderLikedItems}
            addItemToCart={addItemToCart}
            products={products}
          ></IndexPage>
        </Route> */}
        {search === "" ? (
          <Route path="/womenPage">
            <WomenPage
              toggleHeart={toggleHeart}
              setHeart={setHeart}
              heart={heart}
              renderLikedItems={renderLikedItems}
              addItemToCart={addItemToCart}
              products={products}
            ></WomenPage>
          </Route>
        ) : (
          <SearchProductsPage search={search}></SearchProductsPage>
        )}
        {/* 
        <Route path="/womenPage">
          <WomenPage
            search={search}
            addItemToCart={addItemToCart}
            products={products}
          ></WomenPage>
        </Route> */}
        {search === "" ? (
          <Route path="/menPage">
            <MenPage
              addItemToCart={addItemToCart}
              products={products}
            ></MenPage>
          </Route>
        ) : (
          <SearchProductsPage search={search}></SearchProductsPage>
        )}
        {/* <Route path="/menPage">
          <MenPage products={products} addItemToCart={addItemToCart}></MenPage>
        </Route> */}
        {search === "" ? (
          <Route path="/kidsPage">
            <KidsPage
              addItemToCart={addItemToCart}
              products={products}
            ></KidsPage>
          </Route>
        ) : (
          <SearchProductsPage search={search}></SearchProductsPage>
        )}
        {/* <Route path="/kidsPage">
          <KidsPage
            products={products}
            addItemToCart={addItemToCart}
          ></KidsPage>
        </Route> */}
        {search === "" ? (
          <Route path="/outletPage">
            <OutletPage
              addItemToCart={addItemToCart}
              products={products}
            ></OutletPage>
          </Route>
        ) : (
          <SearchProductsPage search={search}></SearchProductsPage>
        )}
        {/* <Route path="/outletPage">
          <OutletPage
            products={products}
            addItemToCart={addItemToCart}
          ></OutletPage>
        </Route> */}
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
        <Route path="/CreateAccountPage">
          <CreateAccountPage></CreateAccountPage>
        </Route>
      </Switch>
      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
