import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
import Intro from "../animatedcomponents/Intro";
import Box from "../animatedcomponents/Box";
import GreetingHome from "../animatedcomponents/GreetingHome";
import Pug from "../animatedcomponents/Pug";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    position: "relative"
  },

  layer_one: {
    position: "absolute",
    zIndex: 1,
    background: "black",
    width: "100vw",
    height: "100vh"
  },

  box_home: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%"
  },

  greeting_home: {
    position: "absolute",
    zIndex: 3,
    width: "12%",
    height: "18%",
    top: "40%",
    left: "28%",
    transform: "translateY(-40%)"
  },

  intro_home: {
    position: "absolute",
    zIndex: 4,
    width: "30%",
    height: "auto",
    top: "40%",
    left: "45%",
    transform: "translateY(-40%)"
  },

  pug: {
    position: "absolute",
    zIndex: 5,
    width: "40%",
    height: "44%",
    top: "56%",
    left: "22%"
  }
});

const messages = ["I am ...", "Thu Nguyen"];

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.layer_one} />
        <div className={classes.box_home}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="unset"
            leftFrom="100%"
            widthFrom="0%"
            heightFrom="100%"
            colorFrom="white"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="100%"
            widthTo="40%"
            heightTo="100%"
            colorTo="white"
            opacityTo="1"
            boxShadowTo="unset"
            configType={config.molasses}
          />
        </div>
        <div className={classes.greeting_home}>
          <GreetingHome />
        </div>
        <div className={classes.intro_home}>
          <Intro
            toggle={true}
            messages={messages}
            delay={500}
            configType={config.molasses}
            heightTrail={110}
            trailsTextHeight="auto"
            trailsTextLetterSpacing="-0.015em"
            trailTextFontSize={64}
            trailTextFontWeight={600}
            trailTextColor="white"
          />
        </div>
        <div className={classes.pug}>
          <Pug />
        </div>
      </div>
    </>
  );
}
