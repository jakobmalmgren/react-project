import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import MenWomenSection from "./components/MenWomenSection";
import Outlet from "./components/Outlet";
import RatingSlider from "./components/RatingSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <MenWomenSection></MenWomenSection>
      <Slider></Slider>
      <MenWomenSection></MenWomenSection>
      <Outlet></Outlet>
      <RatingSlider></RatingSlider>
      <Footer></Footer>
    </div>
  );
}

export default App;
