import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { VscHeart } from "react-icons/vsc";

function Slider() {
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
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
        <div className="slider-card">
          <img src="img/shoes.avif" alt="" className="slider-image" />
          <h3 className="slider-item">SHOES</h3>
          <p className="slider-description">Sneaker, Air Jordan</p>
          <p className="slider-price">$80.99</p>
          <div className="slider-icon">
            <VscHeart></VscHeart>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
