import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
import Box from "../animatedcomponents/Box";
import Timeline from "../animatedcomponents/Timeline";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "white"
  },

  container: {
    background: "linear-gradient(to right, #EDB94C 50%, #FFFFFF 50%)",
    width: "100vw",
    height: "100vh"
  },

  box_one_experience: {
    zIndex: 2,
    position: "absolute",
    width: "10%",
    height: "15%"
  },

  timeline: {
    maxHeight: "100%",
    position: "relative",
    overflow: "auto",
    paddingTop: "10%"
  }
});

export default function ExperiencePage() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 800);
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.box_one_experience}>
          {/* <BoxExperience /> */}
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="14vh"
            rootTransform="unset"
            leftFrom="100%"
            widthFrom="100%"
            heightFrom="0%"
            colorFrom="linear-gradient(to right, #FFFFFF  50%, rgb(0,0,0,1) 50%)"
            opacityFrom="-2"
            boxShadowFrom="0px 10px 30px -5px rgba(0, 0, 0, 0)"
            leftTo="100%"
            widthTo="100%"
            heightTo="100%"
            colorTo="linear-gradient(to right, #FFFFFF  50%, rgb(0,0,0,1) 50%)"
            opacityTo="1"
            boxShadowTo="0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
            configType={config.molasses}
          />
        </div>
        <div className={classes.container}>
          <div className={classes.timeline} hidden={hidden}>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}
