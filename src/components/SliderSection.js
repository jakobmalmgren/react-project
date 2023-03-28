import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";
import css from "./SliderSection..module.css";

function SliderSection() {
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

  return (
    <div>
      <h1 className={css.sliderHeader}>NEEWS</h1>
      <div className={css.carouselWrapper}>
        <Carousel className={css.carousel} responsive={responsive}>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
        </Carousel>
      </div>
    </div>
  );
}

export default SliderSection;
