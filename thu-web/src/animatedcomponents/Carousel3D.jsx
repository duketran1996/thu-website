import React from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

const root = {
  width: "80%",
  height: "600px",
  margin: "0 auto"
};

function Carousel3D(props) {
  return (
    <div style={{ ...root }}>
      <Carousel
        goToSlide={props.currentPage}
        slides={props.cards}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.slow}
      />
    </div>
  );
}

export default Carousel3D;
