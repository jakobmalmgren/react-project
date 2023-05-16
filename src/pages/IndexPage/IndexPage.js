import HeroSection from "./components/HeroSection";
import SliderSection from "../../components/Slider/SliderSection";
import CategorySectionMenWomen from "./components/CategorySectionMenWomen";
import OutletSection from "./components/OutletSection";
import CategorySectionKids from "./components/CategorySectionKids";
import Card from "../../components/Cards/Card";
import css from "./IndexPage.module.css";

function IndexPage(props) {
  const filteredTshirts = props.products
    .filter((item) => {
      return item.item === "T-SHIRT" && item.discount === false;
    })
    .map((tshirt) => {
      return (
        <Card
          deleteLikedItems={props.deleteLikedItems}
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
          deleteLikedItems={props.deleteLikedItems}
          renderLikedItems={props.renderLikedItems}
          key={shoes.id}
          {...shoes}
          addItemToCart={props.addItemToCart}
        ></Card>
      );
    });

  return (
    <div className={css.indexWrapper}>
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
