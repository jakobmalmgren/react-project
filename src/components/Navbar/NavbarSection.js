import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import Navlinks from "./NavlinksSection";
import NavbarSearchSection from "./NavbarSearchSection";
import { GoCheck } from "react-icons/go";
import SignInPage from "../../pages/SignInPage/SignInPage";
import MobileNavigation from "./MobileNavigationSection";
import MyShoppingCartPage from "../../pages/MyShoppingCartPage/MyShoppingCartPage";
import css from "./NavbarSection.module.css";

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
          {props.toggleBurger && <MobileNavigation />}
          {props.toggleBurger ? closer : burger}
        </div>
        <div className={css.navlinksWrapper}>
          <div className={css.navTitle}>
            <Link to="/">
              <h2>.ZWAGGI$H.</h2>
            </Link>
          </div>
          <div className={css.navlinksBigScreen}>
            <Navlinks></Navlinks>
          </div>
        </div>

        <button onClick={props.handleSignIn} className={css.signInBtn}>
          Sign in
        </button>

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
          //---
          // discountPrice={props.discountPrice}
          // taxPriceDiscount={props.taxPriceDiscount}
          // shippingPriceDiscount={props.shippingPriceDiscount}
          // amountToFreeShippingPriceDiscount={
          //   props.amountToFreeShippingPriceDiscount
          // }
          // totalPriceDiscount={props.totalPriceDiscount}
          //-
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
          <BsCart3
            className={css.navIcon}
            onClick={props.handleMyShoppingCartPage}
          ></BsCart3>
          <div className={props.boughtItems.length > 0 ? css.cartCounter : ""}>
            {props.boughtItems.length <= 0 ? "" : props.boughtItems.length}
          </div>

          <Link to="/MyFavoritesPage" className={css.heartWrapper}>
            <VscHeart className={css.navIcon}> </VscHeart>
            <div
              className={props.likedItems.length > 0 ? css.favoriteCounter : ""}
            >
              {props.likedItems.length <= 0 ? "" : props.likedItems.length}
            </div>
          </Link>
        </div>
      </div>
      <div className={css.signInWrapper}>
        <NavbarSearchSection></NavbarSearchSection>
        <div className={css.countryInfo}>
          <img src="/img/united-states.png" alt="" className={css.flag} />
          <small>USA</small>
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
