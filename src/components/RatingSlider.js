import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillStar } from "react-icons/ai";

function RatingSlider() {
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
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
        <div className="rating-card">
          <div className="rating-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
          <div className="rating-title">
            <h3>VERY GOOD EXPERIENCE</h3>
          </div>
          <div className="rating-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic
            </p>
          </div>
          <div className="rating-customer">
            <p>Jakob Malmgren</p>
          </div>
          <div className="rating-time">
            <p>14 hours ago</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default RatingSlider;
