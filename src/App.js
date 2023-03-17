import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import MenWomenSection from "./components/MenWomenSection";
import Outlet from "./components/Outlet";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <MenWomenSection></MenWomenSection>
      <Slider></Slider>
      <MenWomenSection></MenWomenSection>
      <Slider></Slider>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
