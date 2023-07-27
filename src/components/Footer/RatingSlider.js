import SliderCardRatings from "../Cards/SliderCardRatings";
import ratings from "../../data/ratings";
import SliderSection from "../Slider/SliderSection";

function RatingSlider() {
  const ratingData = ratings.map((item) => (
    <SliderCardRatings key={item.id} {...item}></SliderCardRatings>
  ));

  return <SliderSection ratingData={ratingData}></SliderSection>;
}

export default RatingSlider;
