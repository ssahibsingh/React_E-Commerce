import React from "react";
import Slider from "react-slick";
import "./css/SliderCss.css"
function Fade() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        centerPadding: "600px",
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
    };
    return (
        <div className="slider-container" data-testid="slider-component">
            <Slider {...settings}>

                <div>
                    <img  src="./assets/red-shoe.jpg" />
                </div>
                <div>
                    <img src="./assets/blue-shoe.jpg" />
                </div>
                <div>
                    <img  src="./assets/brown-shoe.jpg" />
                </div>
            </Slider>
        </div>
    );
}

export default Fade;
