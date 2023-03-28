import HeroSection from "../components/HeroSection";
import SliderSection from "../components/SliderSection";
import CategoryAdultsSection from "../components/CategoryAdultsSection";
import CategoryKidsSection from "../components/CategoryKidsSection";
import OutletSection from "../components/OutletSection";

function IndexPage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SliderSection></SliderSection>
      <CategoryAdultsSection></CategoryAdultsSection>
      <SliderSection></SliderSection>
      <CategoryKidsSection></CategoryKidsSection>
      <OutletSection></OutletSection>
    </div>
  );
}

export default IndexPage;
