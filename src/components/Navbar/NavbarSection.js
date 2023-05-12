import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import NavlinksSection from "./NavlinksSection";
import NavbarSearchSection from "./NavbarSearchSection";
import { GoCheck } from "react-icons/go";
import SignInPage from "../../pages/SignInPage/SignInPage";
import MobileNavigationSection from "./MobileNavigationSection";
import MyShoppingCartPage from "../../pages/MyShoppingCartPage/MyShoppingCartPage";
import css from "./NavbarSection.module.css";
import { CiLogin } from "react-icons/ci";

function NavbarSection(props) {
  const burger = (
    <RxHamburgerMenu
      onClick={() => props.setToggleBurger(!props.toggleBurger)}
      className={css.openCloseIcon}
    />
  );
  const closer = (
    <CgClose
      onClick={() => props.setToggleBurger(!props.toggleBurger)}
      className={css.openCloseIcon}
    />
  );

  return (
    <div>
      <div className={css.nav}>
        <div className={css.burgerWrapper}>
          {props.toggleBurger && <MobileNavigationSection />}
          {props.toggleBurger ? closer : burger}
        </div>
        <div className={css.navlinksWrapper}>
          <div className={css.navTitle}>
            <Link to="/">
              <h2>FASHION</h2>
            </Link>
          </div>
          <div className={css.navlinksBigScreen}>
            <NavlinksSection></NavlinksSection>
          </div>
        </div>

        {/* {props.openSignIn && (
          <SignInPage
            handleSignIn={props.handleSignIn}
            openSignIn={props.openSignIn}
          ></SignInPage>
        )} */}

        {/* {props.openMyShoppingCartPage && (
          <MyShoppingCartPage
            //------------
            sum={props.sum}
            taxPrice={props.taxPrice}
            shippingPrice={props.shippingPrice}
            totalPrice={props.totalPrice}
            amountToFreeShippingPrice={props.amountToFreeShippingPrice}
            //-----------------
            openMyShoppingCartPage={props.openMyShoppingCartPage}
            handleMyShoppingCartPage={props.handleMyShoppingCartPage}
            deleteItems={props.deleteItems}
            handleDecrement={props.handleDecrement}
            handleIncrement={props.handleIncrement}
            boughtItems={props.boughtItems}
          ></MyShoppingCartPage>
        )} */}

        <SignInPage
          handleSignIn={props.handleSignIn}
          openSignIn={props.openSignIn}
        ></SignInPage>

        <MyShoppingCartPage
          addItemToCart={props.addItemToCart}
          sum={props.sum}
          taxPrice={props.taxPrice}
          shippingPrice={props.shippingPrice}
          totalPrice={props.totalPrice}
          amountToFreeShippingPrice={props.amountToFreeShippingPrice}
          //-----------------
          openMyShoppingCartPage={props.openMyShoppingCartPage}
          handleMyShoppingCartPage={props.handleMyShoppingCartPage}
          deleteItems={props.deleteItems}
          handleDecrement={props.handleDecrement}
          handleIncrement={props.handleIncrement}
          boughtItems={props.boughtItems}
        ></MyShoppingCartPage>

        <div className={css.navIconWrapper}>
          <CiLogin
            onClick={props.handleSignIn}
            className={css.navIconLogin}
          ></CiLogin>
          <BsCart3
            className={css.navIconCart}
            onClick={props.handleMyShoppingCartPage}
          ></BsCart3>
          <div className={props.boughtItems.length > 0 ? css.cartCounter : ""}>
            {props.boughtItems.length <= 0 ? "" : props.boughtItems.length}
          </div>

          <Link to="/MyFavoritesPage" className={css.heartWrapper}>
            <VscHeart className={css.navIconHeart}> </VscHeart>
            <div
              className={props.likedItems.length > 0 ? css.favoriteCounter : ""}
            >
              {props.likedItems.length <= 0 ? "" : props.likedItems.length}
            </div>
          </Link>
        </div>
      </div>
      <div className={css.searchbarWrapper}>
        <NavbarSearchSection setSearch={props.setSearch}></NavbarSearchSection>
        <div className={css.countryInfo}>
          <img src="/img/united-states.png" alt="" className={css.flag} />
          <small>US</small>
        </div>
      </div>

      <div className={css.navInfo}>
        <p className={css.navInfoText}>
          <GoCheck className={css.navIcon}></GoCheck> Free shipments over $100
        </p>
        <p className={css.navInfoText}>
          <GoCheck className={css.navIcon}></GoCheck>Fast shipments
        </p>
        <p className={css.navInfoText}>
          <GoCheck className={css.navIcon}></GoCheck>Handpicked assortment
        </p>
      </div>
    </div>
  );
}

export default NavbarSection;
