import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import css from "./SliderSection..module.css";
import products from "../data/products";

function SliderSection(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1000, min: 650 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 650, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardElements = products.map((item) => {
    return (
      <Card key={item.id} {...item} addToFavorite={props.addToFavorite}></Card>
    );
  });
  return (
    <div>
      <h1>{props.header}</h1>
      <div className={css.carouselWrapper}>
        <Carousel className={css.carousel} responsive={responsive}>
          {cardElements}
        </Carousel>
      </div>
    </div>
  );
}

export default SliderSection;
