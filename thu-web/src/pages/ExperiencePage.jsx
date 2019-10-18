import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
import Box from "../animatedcomponents/Box";
import Timeline from "../animatedcomponents/Timeline";
import { makeStyles } from "@material-ui/core/styles";
import { isTablet, isMobileOnly } from "react-device-detect";
import Color from "../pictures/marble.jpg";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "white"
  },

  container_one: {
    background: `linear-gradient(to right, #EDB94C 50%, rgb(238,238,238,0.5) 50%), url(${Color})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    "-webkit-overflow-scrolling": "touch"
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
  },

  container_two_mobile_landscape: {
    height: "auto",
    width: "90%",
    margin: "auto"
  },

  container_two_tablet_landscape: {
    height: "auto",
    width: "90%",
    margin: "auto"
  },

  container_two_desktop_landscape: {
    height: "auto",
    width: "100vw",
    margin: "auto"
  }
});

export default function ExperiencePage() {
  const [hidden, setHidden] = useState(true);
  const [exp, setExp] = useState("");
  const classes = useStyles();
  const compatible = isMobileOnly
    ? {
        boxHeightTo: "130%",
        classContainerTwo: classes.container_two_mobile_landscape
      }
    : isTablet
    ? {
        boxHeightTo: "90%",
        classContainerTwo: classes.container_two_tablet_landscape
      }
    : {
        boxHeightTo: "80%",
        classContainerTwo: classes.container_two_desktop_landscape
      };

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 800);

    axios
      .get(process.env.REACT_APP_API_URL + "/exp", {
        headers: { Authorization: process.env.JWT_TOKEN }
      })
      .then(function(response) {
        // handle success
        setExp(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log("Failed to get data from firebase: " + error);
      })
      .finally(function() {
        // always executed
      });
  }, []);

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
            colorFrom="unset"
            opacityFrom="-2"
            boxShadowFrom="0px 10px 30px -5px rgba(0, 0, 0, 0)"
            leftTo="100%"
            widthTo="100%"
            heightTo={compatible.boxHeightTo}
            colorTo="unset"
            opacityTo="1"
            boxShadowTo="0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
            configType={config.molasses}
            backgroundImageFrom={`linear-gradient(to right, rgb(238,238,238,0.5) 50%, rgb(0,0,0,1) 50%), url(${Color})`}
            backgroundRepeatFrom="no-repeat"
            backgroundSizeFrom="cover"
          />
        </div>
        <div className={classes.container_one}>
          <div className={classes.timeline} hidden={hidden}>
            <div className={compatible.classContainerTwo}>
              <Timeline data={exp} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
