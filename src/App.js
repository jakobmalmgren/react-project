import "./App.css";
import NavbarSection from "./components/Navbar/NavbarSection";
import RatingSlider from "./components/Footer/RatingSlider";
import IndexPage from "./pages/IndexPage/IndexPage";
import { Route, Routes } from "react-router-dom";
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
  // open/close burger
  const [toggleBurger, setToggleBurger] = useState(false);
  const [openMyShoppingCartPage, setOpenMyShoppingCartPage] = useState(false);
  // open/close myshoppingcartpage
  function handleMyShoppingCartPage() {
    setOpenMyShoppingCartPage(!openMyShoppingCartPage);
  }

  if (toggleBurger) {
  }

  // add itemoverviewpage!
  const [addToCart, setAddToCart] = useState([]);
  function addItemToCart(products) {
    setAddToCart([products]);
  }

  //add/delete MyfavoritePage

  //-------------------------------------------------------------------------

  //de är localstorage som e kruxet..men om ja vill ändra tilbaka e bara o uncommment
  // alla me localstorage i..samma i bouthitems...

  //----------------------------------------------------------------------

  // const getMyLikedFromLocalStorage = JSON.parse(
  //   localStorage.getItem("myFavoritePage")
  // );

  // function renderLikedItems(item) {
  //   const exist = likedItems.find((x) => {
  //     return item.id === x.id;
  //   });
  //   if (exist) {
  //     setLikedItems([...likedItems]);
  //   } else {
  //     setLikedItems([...likedItems, item]);
  //   }
  // }

  // fix kod så de inte blir fel me likeditems om den e null
  function renderLikedItems(item) {
    if (likedItems !== null && likedItems.length >= 0) {
      const exist = likedItems.find((x) => {
        return item.id === x.id;
      });
      if (exist) {
        setLikedItems([...likedItems]);
      } else {
        setLikedItems([...likedItems, item]);
      }
    }
  }
  const [likedItems, setLikedItems] = useState([]);
  // const [likedItems, setLikedItems] = useState(getMyLikedFromLocalStorage);

  // useEffect(() => {
  //   localStorage.setItem("myFavoritePage", JSON.stringify(likedItems));
  // }, [likedItems]);

  // function deleteLikedItems(items) {
  //   const deleted = likedItems.filter((fav) => {
  //     return fav.id !== items.id;
  //   });
  //   return setLikedItems(deleted);
  // }
  function deleteLikedItems(items) {
    if (likedItems !== null && likedItems.length >= 0) {
      const deleted = likedItems.filter((fav) => {
        return fav.id !== items.id;
      });
      return setLikedItems(deleted);
    }
  }

  //add myshoppingcartpage
  // const getMyCartFromLocalStorage = JSON.parse(
  //   localStorage.getItem("myShoppingCart")
  // );
  // const [boughtItems, setBoughtItems] = useState(getMyCartFromLocalStorage);
  const [boughtItems, setBoughtItems] = useState([]);

  // function onAdd(item) {
  //   const exist = boughtItems.find((x) => {
  //     return x.id === item.id;
  //   });
  //   if (exist) {
  //     setBoughtItems(
  //       boughtItems.map((x) => {
  //         return [...x];
  //       })
  //     );
  //   } else {
  //     setBoughtItems([...boughtItems, { ...item, qty: 1 }]);
  //   }
  // }
  function onAdd(item) {
    if (boughtItems !== null) {
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
  }
  useEffect(() => {
    localStorage.setItem("myShoppingCart", JSON.stringify(boughtItems));
  }, [boughtItems]);

  //increase/decrease items in myshoppingcartpage(card)
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

  function deleteItems(product) {
    setBoughtItems(
      boughtItems.filter((item) => {
        return item.id !== product.id;
      })
    );
  }

  // add the fee

  // const sum = boughtItems.reduce((acc, cu) => {
  //   return acc + cu.price * cu.qty;
  // }, 0);

  // const taxPrice = sum * 0.15;
  // const shippingPrice = sum >= 100 ? 0 : 15;
  // const amountToFreeShippingPrice = 100 - sum;
  // const totalPrice = sum + taxPrice + shippingPrice;

  let sum;
  if (boughtItems && boughtItems.length > 0) {
    sum = boughtItems.reduce((acc, cu) => {
      return acc + cu.price * cu.qty;
    }, 0);
  }

  const taxPrice = sum * 0.15;
  const shippingPrice = sum >= 100 ? 0 : 15;
  const amountToFreeShippingPrice = 100 - sum;
  const totalPrice = sum + taxPrice + shippingPrice;

  //open/close signInpage
  const [openSignIn, setOpenSignIn] = useState(false);
  function handleSignIn() {
    setOpenSignIn(!openSignIn);
  }

  //prevent from scrolling when open signinpage and shoppingcartpage
  if (openSignIn || openMyShoppingCartPage || toggleBurger) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  //searchsection in navbar
  const [search, setSearch] = useState("");

  return (
    <div>
      <NavbarSection
        setSearch={setSearch}
        handleMyShoppingCartPage={handleMyShoppingCartPage}
        openMyShoppingCartPage={openMyShoppingCartPage}
        sum={sum}
        taxPrice={taxPrice}
        shippingPrice={shippingPrice}
        totalPrice={totalPrice}
        amountToFreeShippingPrice={amountToFreeShippingPrice}
        likedItems={likedItems}
        handleSignIn={handleSignIn}
        addItemToCart={addItemToCart}
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
      <Routes>
        <Route
          exact
          path="/"
          element={
            <IndexPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              addItemToCart={addItemToCart}
              products={products}
            ></IndexPage>
          }
        />
        <Route
          path="/womenPage"
          element={
            <WomenPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              addItemToCart={addItemToCart}
              products={products}
            ></WomenPage>
          }
        />
        <Route
          path="/menPage"
          element={
            <MenPage
              products={products}
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              addItemToCart={addItemToCart}
            ></MenPage>
          }
        />
        <Route
          path="/kidsPage"
          element={
            <KidsPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              products={products}
              addItemToCart={addItemToCart}
            ></KidsPage>
          }
        />
        <Route
          path="/outletPage"
          element={
            <OutletPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              products={products}
              addItemToCart={addItemToCart}
            ></OutletPage>
          }
        />

        <Route
          path="/MyFavoritesPage"
          element={
            <MyFavoritePage
              addItemToCart={addItemToCart}
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              likedItems={likedItems}
            ></MyFavoritePage>
          }
        />

        <Route
          path="/ItemOverviewPage"
          element={
            <ItemOverviewPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              onAdd={onAdd}
              addToCart={addToCart}
            ></ItemOverviewPage>
          }
        />

        <Route
          path="/checkoutPage"
          element={
            <CheckOutPage
              addItemToCart={addItemToCart}
              sum={sum}
              taxPrice={taxPrice}
              shippingPrice={shippingPrice}
              totalPrice={totalPrice}
              amountToFreeShippingPrice={amountToFreeShippingPrice}
              setBoughtItems={setBoughtItems}
              products={products}
              boughtItems={boughtItems}
              deleteItems={deleteItems}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            ></CheckOutPage>
          }
        />

        <Route
          path="/CreateAccountPage"
          element={<CreateAccountPage></CreateAccountPage>}
        />

        <Route
          path="/SearchProductsPage"
          element={
            <SearchProductsPage
              deleteLikedItems={deleteLikedItems}
              renderLikedItems={renderLikedItems}
              addItemToCart={addItemToCart}
              setSearch={setSearch}
              search={search}
            ></SearchProductsPage>
          }
        />
      </Routes>
      {openSignIn || openMyShoppingCartPage ? (
        <div
          className="layover"
          onClick={() => {
            setOpenSignIn(false);
            setOpenMyShoppingCartPage(false);
          }}
        ></div>
      ) : (
        ""
      )}
      <RatingSlider></RatingSlider>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
