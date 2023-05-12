import NavlinksSection from "./NavlinksSection";
import css from "./MobileNavigationSection.module.css";

function MobileNavigationSection() {
  return (
    <div className={css.navlinksMobile}>
      <NavlinksSection></NavlinksSection>
    </div>
  );
}

export default MobileNavigationSection;
