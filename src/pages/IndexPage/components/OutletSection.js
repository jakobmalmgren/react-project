import React from "react";
import css from "./OutletSection..module.css";
import { Link } from "react-router-dom";
function OutletSection() {
  return (
    <Link to="/OutletPage" className={css.outletWrapper}>
      <div className={css.outlet}>
        <h1>OUTLET</h1>
        <p>Deals up to 70% discount</p>
      </div>
    </Link>
  );
}

export default OutletSection;
