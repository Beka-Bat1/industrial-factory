import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import "./index.css";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  console.log(children, "children");

  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper__main">{children}</div>
      <Banner />
      <Footer />
    </>
  );
};

export default Layout;
