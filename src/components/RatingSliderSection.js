import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCardRatings from "./SliderCardRatings";

// den här behövs Inte..e bara för visa me RatingSlidernnn...
// den här ska väck sen ska ratingcarden in o vanlia card in i SliderSection..

function RatingSliderSection() {
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
    <div className="carousel-wrapper">
      <Carousel className="carousel" responsive={responsive}>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
        <SliderCardRatings></SliderCardRatings>
      </Carousel>
    </div>
  );
}

export default RatingSliderSection;
