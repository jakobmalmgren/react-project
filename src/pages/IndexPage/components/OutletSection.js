import React from "react";
import css from "./OutletSection..module.css";
import { Link } from "react-router-dom";
function OutletSection() {
  return (
    <Link to="/OutletPage">
      <div className={css.outletWrapper}>
        <div>
          <h1>OUTLET</h1>
          <p>Deals up to 70% discount</p>
        </div>
      </div>
    </Link>
  );
}

export default OutletSection;
