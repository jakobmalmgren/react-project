import Navlinks from "./NavlinksSection";
import css from "./MobileNavigationSection.module.css";
function MobileNavigationSection() {
  return (
    <div className={css.navlinksMobile}>
      <Navlinks></Navlinks>
    </div>
  );
}

export default MobileNavigationSection;
