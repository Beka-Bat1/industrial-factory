import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import "./index.css";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
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
