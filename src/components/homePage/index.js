import React from "react";
import Banner from "../../layout/Banner/Banner";
import Contact from "./Contact/Contact";
import GallerySection from "./GallerySection/GallerySection";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Welcome from "./Welcome/Welcome";

function HomePage() {
  return (
    <div>
      <Slider />
      <Welcome />
      <Services />
      <GallerySection />
      <Contact />
    </div>
  );
}

export default HomePage;
