import React, { useState } from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ThuGrad from "../pictures/thugrad.JPG";

const card = {
  width: "55ch",
  height: "40ch",
  background: "grey",
  borderRadius: "5px",
  boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
  transition: "box-shadow 0.5s",
  willChange: "transform",
  border: "15px solid white"
};

const card_hover = {
  boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)"
};

//Change calc for picture rotation
const calc = (x, y) => [
  -(y - window.innerHeight / 1.3) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PicTwo = ({ scaleNum, heightPic }) => (
  <animated.div
    style={{
      width: "410px",
      height: heightPic,
      overflow: "hidden"
    }}
  >
    <LazyLoadImage
      width="410px"
      effect="blur"
      style={{
        transform: `scale(${scaleNum})`,
        transition: "transform 1.6s ease"
      }}
      visibleByDefault={true}
      //src={ThuGrad}
    />
  </animated.div>
);

function ThuPicTwoCard(data) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [isHovered, setHovered] = useState(false);

  const cardMode = isHovered ? card_hover : "";
  const scaleNum = isHovered ? 1.4 : 1;

  const config = { mass: 1, tension: 1000, friction: 200 };
  const toggle = data.picTwoSwitch;
  const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    heightFrame: toggle ? 290 : 0,
    heightPic: toggle ? 260 : 0,
    from: { opacity: 0, heightFrame: 0, heightPic: 0 }
  });

  return (
    <>
      {trail.map(({ x, heightFrame, heightPic, ...rest }, index) => (
        <animated.div
          key={index}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => {
            set({ xys: [0, 0, 1] });
            setHovered(false);
          }}
          style={{
            ...rest,
            ...card,
            ...cardMode,
            height: heightFrame,
            transform: props.xys.interpolate(trans)
          }}
        >
          <PicTwo scaleNum={scaleNum} heightPic={heightPic} />
        </animated.div>
      ))}
    </>
  );
}

export default ThuPicTwoCard;
