import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTrail, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  trails_text: {
    width: "auto",
    height: props => props.trailsTextHeight,
    letterSpacing: props => props.trailsTextLetterSpacing,
    fontSize: props => props.trailTextFontSize,
    fontWeight: props => props.trailTextFontWeight,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    color: props => props.trailTextColor,
    textAlign: "left",
    willChange: "transform, opacity",
    overflow: "hidden",
    "&>div": { overflow: "hidden" }
  }
});

export default function Intro(props) {
  const [toggle] = useState(props.toggle);
  const classes = useStyles(props);
  const trail = useTrail(props.messages.length, {
    delay: props.delay,
    config: props.configType,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? props.heightTrail : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <>
      <CssBaseline />
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={props.messages[index]}
          className={classes.trails_text}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          <animated.div
            style={{
              height,
              justifyContent: "left",
              alignItems: "left",
              display: "flex"
            }}
          >
            {props.messages[index]}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}
