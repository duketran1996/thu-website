import React, { useState } from "react";
import { config, useSpring, animated } from "react-spring";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useGesture } from "react-use-gesture";
import Img from "react-image";

const useStyles = makeStyles({
  card: {
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    transition: "box-shadow 0.5s",
    willChange: "transform",
    overflow: "hidden",
    lineHeight: 20,
    textAlign: "center",
    "&:hover": {
      boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)"
    }
  }
});

//Change calc for picture rotation
const calc = (x, y, xTilt, yTilt) => [
  -(y - window.innerHeight / yTilt) / 20,
  (x - window.innerWidth / xTilt) / 20,
  1.1
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PicHigh = props => (
  <Img
    width={props.width}
    height={props.height}
    src={props.pictureHigh}
    decode={true}
    loader={<CircularProgress thickness={6} style={{ color: "black" }} />}
    style={{
      overflow: "hidden",
      willChange: "transform",
      transform: `scale(${props.scaleNum})`,
      transition: "transform 1.8s ease"
    }}
  />
);

export default function ThuPic(props) {
  const [propsSpring, set] = useSpring(() => ({
    xys: [0, 0, 1]
  }));
  const classes = useStyles(props);
  const [isHovered, setHovered] = useState(false);
  const scaleNum = isHovered ? props.scaleTo : props.scaleFrom;

  const springSlide = useSpring({
    from: { width: props.widthFrom, height: props.heightFrom, opacity: 0 },
    to: async next => {
      await next({
        width: props.widthTo,
        height: props.heightTo,
        opacity: 1
      });
    },
    delay: props.delay,
    config: config.molasses
  });

  const touch = useGesture({
    onDrag: ({ xy, dragging }) =>
      dragging
        ? (setHovered(true),
          set({ xys: calc(...xy, props.xTilt, props.yTilt) }))
        : (setHovered(false), set({ xys: [0, 0, 1] })),
    onMove: ({ xy }) => set({ xys: calc(...xy, props.xTilt, props.yTilt) }),
    onHover: ({ hovering }) =>
      hovering ? setHovered(true) : (set({ xys: [0, 0, 1] }), setHovered(false))
  });

  return (
    <>
      <animated.div
        {...touch()}
        className={classes.card}
        style={{
          ...springSlide,
          transform: propsSpring.xys.interpolate(trans)
        }}
      >
        <PicHigh
          width={props.widthTo}
          height={props.heightTo}
          pictureHigh={props.pictureHigh}
          scaleNum={scaleNum}
        />
      </animated.div>
    </>
  );
}
