import { Navbar, Main, Product, Footer } from "../components";
import React from "react";
import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
      <>
          <Navbar/>
          <Main/>
          <p className="lead text-center" data-testId="center-welcome-text">
              This is the home page. We hope you're enjoying your interview! Check out some of our favorite products below.
          </p>
          <SimpleSlider/>
          <Footer></Footer>
      </>
  )
}

export default Home