import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCardRatings from "../Cards/SliderCardRatings";
import ratings from "../../data/ratings";

function RatingSliderSection(props) {
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
  const ratingData = ratings.map((item) => {
    return <SliderCardRatings key={item.id} {...item}></SliderCardRatings>;
  });
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousel" responsive={responsive}>
        {ratingData}
      </Carousel>
    </div>
  );
}

export default RatingSliderSection;
