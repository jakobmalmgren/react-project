import { BsCart3 } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import Navlinks from "./Navlinks";
import NavbarSearch from "./NavbarSearch";
import { BsCheck2 } from "react-icons/bs";

import MobileNavigation from "./MobileNavigation";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const burger = (
    <RxHamburgerMenu onClick={() => setOpen(!open)} className="openCloseIcon" />
  );
  const closer = (
    <CgClose onClick={() => setOpen(!open)} className="openCloseIcon" />
  );

  return (
    <div>
      <div className="nav">
        <div className="burger-wrapper">
          {open && <MobileNavigation />}
          {open ? closer : burger}
        </div>
        <div className="navlinks-wrapper">
          <div className="nav-title">
            <h2>.ZWAGGISH.</h2>
          </div>
          <div className="navlinks-bigScreen">
            <Navlinks></Navlinks>
          </div>
        </div>
        <div className="nav-icon-wrapper">
          <IoIosSearch className="nav-icon"></IoIosSearch>
          <BsCart3 className="nav-icon"></BsCart3>
          <VscHeart className="nav-icon"></VscHeart>
        </div>
      </div>
      <div className="nav-info">
        <p className="nav-info-text">
          <BsCheck2 className="icon-check"></BsCheck2> Free shipments over $100
        </p>
        <p className="nav-info-text">
          <BsCheck2 className="icon-check"></BsCheck2>Fast shipments
        </p>
        <p className="nav-info-text">
          <BsCheck2 className="icon-check"></BsCheck2>Handpicked assortment
        </p>
      </div>
      <NavbarSearch></NavbarSearch>
    </div>
  );
}

export default Navbar;
