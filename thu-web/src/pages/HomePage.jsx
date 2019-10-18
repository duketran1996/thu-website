import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
//import Intro from "../animatedcomponents/Intro";
import Box from "../animatedcomponents/Box";
import GreetingHome from "../animatedcomponents/GreetingHome";
import HomePic from "../animatedcomponents/HomePic";
import { makeStyles } from "@material-ui/core/styles";
import imgOne from "../pictures/img_1.png";
import { isTablet, isMobileOnly } from "react-device-detect";
import NeonText from "../animatedcomponents/NeonText";
import Color from "../pictures/marble.jpg";
//import Black from "../pictures/bicycle_black.jpeg";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },

  layer_one: {
    position: "absolute",
    zIndex: 1,
    background: "black",
    //backgroundImage: `url(${Black})`,
    backgroundImage: "unset",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh"
  },

  box_home: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%"
  },

  home_pic_desktop_landscape: {
    position: "absolute",
    zIndex: 5,
    width: "36%",
    height: "44%",
    top: "56%",
    left: "22%"
  },

  home_pic_mobile_landscape: {
    position: "absolute",
    zIndex: 5,
    width: "36%",
    height: "47%",
    top: "53%",
    left: "24%"
  },

  home_pic_tablet_landscape: {
    position: "absolute",
    zIndex: 5,
    width: "50%",
    height: "44%",
    top: "56%",
    left: "18%"
  },

  greeting_home_desktop_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "12%",
    height: "18%",
    left: "26%",
    top: "46%",
    transform: "translateY(-46%)"
  },

  greeting_home_mobile_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "16%",
    height: "20%",
    left: "24%",
    top: "36%",
    transform: "translateY(-36%)"
  },

  greeting_home_tablet_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "16%",
    height: "18%",
    left: "22%",
    top: "46%",
    transform: "translateY(-46%)"
  },

  intro_home_desktop_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "40%",
    height: "auto",
    top: "42%",
    left: "45%",
    transform: "translateY(-42%)"
  },

  intro_home_mobile_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "50%",
    height: "auto",
    top: "35%",
    left: "45%",
    transform: "translateY(-35%)"
  },

  intro_home_tablet_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "50%",
    height: "auto",
    top: "45%",
    left: "45%",
    transform: "translateY(-45%)"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const [intro, setIntro] = useState([]);
  const [greeting, setGreeting] = useState("");

  const compatible = isMobileOnly
    ? {
        introHome: classes.intro_home_mobile_landscape,
        introHeightTrail: 50,
        introFontSize: 50,
        introHeight: "60px",
        greetingHome: classes.greeting_home_mobile_landscape,
        greetingFontSize: 60,
        homePic: classes.home_pic_mobile_landscape
      }
    : isTablet
    ? {
        introHome: classes.intro_home_tablet_landscape,
        introHeightTrail: 110,
        introFontSize: 100,
        introHeight: "120px",
        greetingHome: classes.greeting_home_tablet_landscape,
        greetingFontSize: 100,
        homePic: classes.home_pic_tablet_landscape
      }
    : window.outerWidth === 1112
    ? {
        introHome: classes.intro_home_tablet_landscape,
        introHeightTrail: 110,
        introFontSize: 100,
        introHeight: "120px",
        greetingHome: classes.greeting_home_tablet_landscape,
        greetingFontSize: 100,
        homePic: classes.home_pic_tablet_landscape
      }
    : {
        introHome: classes.intro_home_desktop_landscape,
        introHeightTrail: 110,
        introFontSize: 100,
        introHeight: "120px",
        greetingHome: classes.greeting_home_desktop_landscape,
        greetingFontSize: 100,
        homePic: classes.home_pic_desktop_landscape
      };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/home", {
        headers: { Authorization: process.env.JWT_TOKEN }
      })
      .then(function(response) {
        // handle success
        setGreeting(response.data.greeting);
        setIntro(response.data.home_intro);
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
            backgroundImageFrom={`url(${Color})`}
            //backgroundImageFrom="unset"
            backgroundRepeatFrom="no-repeat"
            backgroundSizeFrom="cover"
          />
        </div>
        <div className={compatible.introHome}>
          {/* <Intro
            toggle={true}
            messages={intro}
            delay={500}
            configType={config.molasses}
            heightTrail={compatible.introHeightTrail}
            trailsTextHeight="auto"
            trailsTextLetterSpacing="-0.015em"
            trailTextFontSize={compatible.introFontSize}
            trailTextFontWeight={600}
            trailTextColor="white"
          /> */}
          {intro.map((item, i) => (
            <NeonText
              key={"message_" + i}
              message={item}
              fontSize={compatible.introFontSize}
              textHeight={compatible.introHeight}
            />
          ))}
        </div>
        <div className={compatible.greetingHome}>
          <GreetingHome
            fontSize={compatible.greetingFontSize}
            message={greeting}
          />
        </div>
        <div className={compatible.homePic} hidden={true}>
          <HomePic picture={`url(${imgOne})`} />
        </div>
      </div>
    </>
  );
}
