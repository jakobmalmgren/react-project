import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "./SliderSection..module.css";

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

  return (
    <div>
      <h1 className={css.sliderHeader}>{props.header}</h1>

      <Carousel responsive={responsive}>
        {props.filteredTshirts}
        {props.filteredShoes}
      </Carousel>
    </div>
  );
}

export default SliderSection;
