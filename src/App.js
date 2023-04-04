import "./App.css";
import NavbarSection from "./components/NavbarSection";
import RatingSlider from "./components/RatingSliderSection";
import IndexPage from "./pages/IndexPage";
import { Switch, Route } from "react-router-dom";
import FooterSection from "./components/FooterSection";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import KidsPage from "./pages/KidsPage";
import OutletPage from "./pages/OutletPage";
import MyFavoritePage from "./pages/MyFavoritePage";
import { useState } from "react";
import AddToCartPage from "./pages/AddToCartPage";

function App() {
  const [likedItems, setLikedItems] = useState([]);
  const [product, setProduct] = useState([]);

  function addToFavorite(products) {
    //matcha id måste de för finns de redan ska de ej pushas upp
    setLikedItems([...likedItems, products]);
    console.log(likedItems);
  }
  // function deleteFavorite(products) {
  //   setLikedItems(
  //     likedItems.filter((item) => {
  //       item.id ! == products.id;
  //     })
  //   );
  // }

  return (
    <div>
      <NavbarSection likedItems={likedItems}></NavbarSection>

      <Switch>
        <Route exact path="/">
          <IndexPage addToFavorite={addToFavorite}></IndexPage>
        </Route>
        <Route path="/womenPage">
          <WomenPage></WomenPage>
        </Route>
        <Route path="/menPage">
          <MenPage></MenPage>
        </Route>
        <Route path="/kidsPage">
          <KidsPage></KidsPage>
        </Route>
        <Route path="/outletPage">
          <OutletPage></OutletPage>
        </Route>
        <Route path="/MyFavoritesPage">
          <MyFavoritePage likedItems={likedItems}></MyFavoritePage>
        </Route>
        <Route path="/MyAddToCartPage">
          <AddToCartPage></AddToCartPage>
        </Route>
      </Switch>

      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
