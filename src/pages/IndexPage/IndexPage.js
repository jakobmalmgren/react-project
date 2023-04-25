import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";
import CategorySectionMenWomen from "./components/CategorySectionMenWomen";
import OutletSection from "./components/OutletSection";
import CategorySectionKids from "./components/CategorySectionKids";
import Card from "../../components/Cards/Card";

function IndexPage(props) {
  const filteredTshirts = props.products
    .filter((item) => {
      return item.item === "T-SHIRT" && item.discount === false;
    })
    .map((tshirt) => {
      return (
        <Card
          renderLikedItems={props.renderLikedItems}
          key={tshirt.id}
          {...tshirt}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  const filteredShoes = props.products
    .filter((item) => {
      return item.item === "SHOES" && item.discount === false;
    })
    .map((shoes) => {
      return (
        <Card
          key={shoes.id}
          renderLikedItems={props.renderLikedItems}
          {...shoes}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });
  return (
    <div>
      <HeroSection></HeroSection>
      <SliderSection
        filteredTshirts={filteredTshirts}
        header="T-shirts - News"
        addItemToCart={props.addItemToCart}
      ></SliderSection>
      <CategorySectionMenWomen
        categoryMale="MEN"
        categoryFemale="WOMEN"
      ></CategorySectionMenWomen>

      <SliderSection
        header="Shoes - News"
        filteredShoes={filteredShoes}
      ></SliderSection>
      <CategorySectionKids></CategorySectionKids>
      <OutletSection></OutletSection>
    </div>
  );
}

export default IndexPage;
