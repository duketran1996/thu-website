import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config, useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/styles";
import PugPic from "../pictures/pugcolor.png";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },

  box: {
    backgroundImage: `url(${PugPic})`,
    backgroundSize: "600px 400px",
    backgroundPosition: "20% bottom",
    backgroundRepeat: "no-repeat"
  }
});
export default function Pug() {
  const classes = useStyles();
  const props = useSpring({
    from: { width: "0%", height: "100%" },
    to: async next => {
      await next({
        height: "100%",
        width: "100%"
      });
    },
    delay: 500,
    config: config.molasses
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <animated.div className={classes.box} style={props} />
    </div>
  );
}
