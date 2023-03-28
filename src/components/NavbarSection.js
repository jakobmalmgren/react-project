import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import Navlinks from "./NavlinksSection";
import NavbarSearchSection from "./NavbarSearchSection";
import { BsCheck2 } from "react-icons/bs";
import SignInPage from "../pages/SignInPage";
import MobileNavigation from "./MobileNavigationSection";
import MyShoppingCartPage from "../pages/MyShoppingCartPage";
import { useState } from "react";
import css from "./NavbarSection.module.css";

function NavbarSection() {
  // fixa till en useState
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openMyCart, setOpenMyCart] = useState(false);
  const burger = (
    <RxHamburgerMenu
      onClick={() => setOpen(!open)}
      className={css.openCloseIcon}
    />
  );
  const closer = (
    <CgClose onClick={() => setOpen(!open)} className={css.openCloseIcon} />
  );

  return (
    <div>
      <div className={css.nav}>
        <div className={css.burgerWrapper}>
          {open && <MobileNavigation />}
          {open ? closer : burger}
        </div>
        <div className={css.navlinksWrapper}>
          <div className={css.navTitle}>
            <Link to="/">
              <h2>.ZWAGGISH.</h2>
            </Link>
          </div>
          <div className={css.navlinksBigScreen}>
            <Navlinks></Navlinks>
          </div>
        </div>

        {openMyCart && (
          <MyShoppingCartPage
            setOpenMyCart={setOpenMyCart}
          ></MyShoppingCartPage>
        )}

        <div className={css.navIconWrapper}>
          <BsCart3
            className={css.navIcon}
            onClick={() => setOpenMyCart(true)}
          ></BsCart3>

          <Link to="/MyFavoritesPage" className={css.heartWrapper}>
            <VscHeart className={css.navIcon}></VscHeart>
          </Link>
        </div>
      </div>
      <div className={css.signInWrapper}>
        <div onClick={() => setOpenModal(true)}>SIGN IN</div>

        {openModal && <SignInPage setOpenModal={setOpenModal}></SignInPage>}
        <NavbarSearchSection></NavbarSearchSection>
      </div>

      <div className={css.navInfo}>
        <p className={css.navInfoText}>
          <BsCheck2 className={css.navIcon}></BsCheck2> Free shipments over $100
        </p>
        <p className={css.navInfoText}>
          <BsCheck2 className={css.navIcon}></BsCheck2>Fast shipments
        </p>
        <p className={css.navInfoText}>
          <BsCheck2 className={css.navIcon}></BsCheck2>Handpicked assortment
        </p>
      </div>
    </div>
  );
}

export default NavbarSection;
