import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config, useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },

  box: {
    backgroundImage: props => props.picture,
    // backgroundSize: "600px 400px",
    backgroundSize: "100% 100%",
    backgroundPosition: "20% bottom",
    backgroundRepeat: "no-repeat"
  }
});
export default function HomePic(props) {
  const classes = useStyles(props);
  const propsSpring = useSpring({
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
      <animated.div className={classes.box} style={{ ...propsSpring }} />
    </div>
  );
}
