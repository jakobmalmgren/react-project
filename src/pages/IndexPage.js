import HeroSection from "../components/HeroSection";
import SliderSection from "../components/SliderSection";
import CategorySection from "../components/CategorySection";
import OutletSection from "../components/OutletSection";

function IndexPage(props) {
  return (
    <div>
      {/* KÖRA FILTER FÖR SHOES O T SHIRT ME */}
      <HeroSection></HeroSection>
      <SliderSection
        header="NEWS"
        addToFavorite={props.addToFavorite}
      ></SliderSection>
      <CategorySection
        categoryMale="MEN"
        categoryFemale="T-SHIRTS"
      ></CategorySection>
      <SliderSection header="SHOES"></SliderSection>
      <CategorySection
        categoryMale="BOYS"
        categoryFemale="GIRLS"
      ></CategorySection>
      <OutletSection></OutletSection>
    </div>
  );
}

export default IndexPage;
