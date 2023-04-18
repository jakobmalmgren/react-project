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

function App() {
  const [toggleBurger, setToggleBurger] = useState(false); // öppnar/stännger Burgermenu
  const [openMyShoppingCartPage, setOpenMyShoppingCartPage] = useState(false); // öppnar/stänger myshoppingcartpage

  // -----------------------läggeer till i itemoverviewpage!
  const [addToCart, setAddToCart] = useState([]);
  function addItemToCart(products) {
    setAddToCart([products]);
  }
  //----------------------------------------------

  //--------------------------lägger till MyfavoritePage
  function renderItems(products) {
    setLikedItems([...likedItems, products]); //..lägger de i favo containern
  }
  const [likedItems, setLikedItems] = useState([]);
  const [liked, setLiked] = useState(false);

  //----------------------------------------------------

  //------------------lägger till va man valt att köpa i myshoppingcartpage MED state!
  const [boughtItems, setBoughtItems] = useState([]);

  function onAdd(item) {
    const exist = boughtItems.find((x) => {
      return x.id === item.id;
    });
    if (exist) {
      setBoughtItems(
        boughtItems.map((x) => {
          return x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x;
        })
      );
    } else {
      setBoughtItems([...boughtItems, { ...item, qty: 1 }]);
    }
  }
  function onRemove(item) {
    const exist = boughtItems.find((x) => {
      return x.id === item.id;
    });
    if (exist.qty === 1) {
      setBoughtItems(
        boughtItems.filter((x) => {
          return x.id !== item.id;
        })
      );
    } else {
      setBoughtItems(
        boughtItems.map((x) => {
          return x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x;
        })
      );
    }
  }
  /////----------------- plugga denna..viktigt! varför [] i else o {} i första..

  return (
    <div>
      <NavbarSection
        onRemove={onRemove}
        likedItems={likedItems}
        boughtItems={boughtItems}
        toggleBurger={toggleBurger}
        setToggleBurger={setToggleBurger}
        onAdd={onAdd}
        openMyShoppingCartPage={openMyShoppingCartPage}
        setOpenMyShoppingCartPage={setOpenMyShoppingCartPage}
      ></NavbarSection>

      <Switch>
        <Route exact path="/">
          <IndexPage
            renderItems={renderItems}
            addItemToCart={addItemToCart}
            products={products}
          ></IndexPage>
        </Route>
        <Route path="/womenPage">
          <WomenPage
            renderItems={renderItems}
            addItemToCart={addItemToCart}
          ></WomenPage>
        </Route>
        <Route path="/menPage">
          <MenPage
            products={products}
            renderItems={renderItems}
            addItemToCart={addItemToCart}
          ></MenPage>
        </Route>
        <Route path="/kidsPage">
          <KidsPage
            products={products}
            renderItems={renderItems}
            addItemToCart={addItemToCart}
          ></KidsPage>
        </Route>
        <Route path="/outletPage">
          <OutletPage
            products={products}
            renderItems={renderItems}
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
            renderItems={renderItems}
          ></ItemOverviewPage>
        </Route>
        <Route path="/checkoutPage">
          <CheckOutPage
            boughtItems={boughtItems}
            onRemove={onRemove}
          ></CheckOutPage>
        </Route>
      </Switch>

      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
