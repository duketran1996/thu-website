import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: props => props.rootPosition,
    width: props => props.rootWidth,
    height: props => props.rootHeight,
    transform: props => props.rootTransform
  }
});

export default function Box(props) {
  const classes = useStyles(props);
  const propsSpring = useSpring({
    from: {
      left: props.leftFrom,
      width: props.widthFrom,
      height: props.heightFrom,
      background: props.colorFrom,
      opacity: props.opacityFrom,
      boxShadow: props.boxShadowFrom,
      backgroundImage: props.backgroundImageFrom,
      backgroundRepeat: props.backgroundRepeatFrom,
      backgroundSize: props.backgroundSizeFrom
    },
    to: async next => {
      await next({
        left: props.leftTo,
        height: props.heightTo,
        width: props.widthTo,
        background: props.colorTo,
        opacity: props.opacityTo,
        boxShadow: props.boxShadowTo
      });
    },
    config: props.configType
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <animated.div style={propsSpring} />
    </div>
  );
}
