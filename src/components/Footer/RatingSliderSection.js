import SliderCardRatings from "../Cards/SliderCardRatings";
import ratings from "../../data/ratings";
import SliderSection from "../Slider/SliderSection";

function RatingSliderSection() {
  const ratingData = ratings.map((item) => {
    return <SliderCardRatings key={item.id} {...item}></SliderCardRatings>;
  });
  return <SliderSection ratingData={ratingData}></SliderSection>;
}

export default RatingSliderSection;
