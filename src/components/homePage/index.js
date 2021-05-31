import React, { useEffect } from "react";
import Contact from "./Contact/Contact";
import GallerySection from "./GallerySection/GallerySection";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import Welcome from "./Welcome/Welcome";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
