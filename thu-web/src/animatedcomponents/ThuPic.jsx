import React, { useState } from "react";
import { config, useSpring, animated } from "react-spring";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const card = {
  boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
  transition: "box-shadow 0.5s",
  willChange: "transform"
};

const card_hover = {
  boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)"
};

//Change calc for picture rotation
const calc = (x, y, xTilt, yTilt) => [
  -(y - window.innerHeight / yTilt) / 20,
  (x - window.innerWidth / xTilt) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Pic = props => (
  <animated.div
    style={{
      ...props.spring,
      overflowX: "hidden",
      overflowY: "hidden"
    }}
  >
    <LazyLoadImage
      width="100%"
      height="100%"
      effect="blur"
      style={{
        transform: `scale(${props.scaleNum})`,
        transition: "transform 1.8s ease"
      }}
      visibleByDefault={true}
      src={props.picture}
    />
  </animated.div>
);

export default function ThuPic(props) {
  const [propsSpring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [isHovered, setHovered] = useState(false);

  const scaleNum = isHovered ? props.scale : 1;
  const cardMode = isHovered ? card_hover : "";

  const springSlide = useSpring({
    from: { width: props.widthFrom, height: props.heightFrom },
    to: async next => {
      await next({
        width: props.widthTo,
        height: props.heightTo
      });
    },
    delay: props.delay,
    config: config.molasses
  });

  return (
    <>
      <animated.div
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: calc(x, y, props.xTilt, props.yTilt) })
        }
        onMouseLeave={() => {
          set({ xys: [0, 0, 1] });
          setHovered(false);
        }}
        style={{
          ...card,
          ...cardMode,
          ...springSlide,
          transform: propsSpring.xys.interpolate(trans)
        }}
      >
        <Pic
          scaleNum={scaleNum}
          spring={{ ...springSlide }}
          picture={props.picture}
        />
      </animated.div>
    </>
  );
}
