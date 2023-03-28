import "./App.css";
import Navbar from "./components/NavbarSection";
import RatingSlider from "./components/RatingSliderSection";
import IndexPage from "./pages/IndexPage";
import { Switch, Route } from "react-router-dom";
import FooterSection from "./components/FooterSection";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import KidsPage from "./pages/KidsPage";
import OutletPage from "./pages/OutletPage";
import MyFavoritePage from "./pages/MyFavoritePage";
import AddToCartPage from "./pages/AddToCartPage";
import MyShoppingCartCard from "./components/MyShoppingCartCard";
import MyShoppingCartPage from "./pages/MyShoppingCartPage";
import SignInPage from "./pages/SignInPage";
import DiscountModalSection from "./components/DiscountModalSection";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <IndexPage></IndexPage>
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
          <MyFavoritePage></MyFavoritePage>
        </Route>
      </Switch>

      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
