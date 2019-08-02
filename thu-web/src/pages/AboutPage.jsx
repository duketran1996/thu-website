import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "../animatedcomponents/Intro";
import Box from "../animatedcomponents/Box";
import { config } from "react-spring";
import ThuPic from "../animatedcomponents/ThuPic";
import { makeStyles } from "@material-ui/styles";
import ThuAoDai from "../pictures/thuaodai.JPG";
import ThuPinkFlower from "../pictures/thupinkflower.JPG";
import ThuGrad from "../pictures/thugrad.JPG";

const useStyles = makeStyles({
  root: {
    position: "relative"
  },

  layer_one: {
    position: "absolute",
    zIndex: 1,
    background: "linear-gradient(to right, #ECCC93 20%, #EDB94C 100%)",
    width: "100vw",
    height: "100vh"
  },

  box_one_about: {
    position: "absolute",
    zIndex: 2
  },

  box_two_about: {
    position: "absolute",
    zIndex: 2
  },

  intro_about: {
    position: "absolute",
    zIndex: 4,
    width: "50vw",
    height: "auto",
    transform: "translate(116%, 46%)"
  },

  thu_pic_one: {
    position: "absolute",
    zIndex: 4,
    width: "auto",
    height: "auto",
    transform: "translate(24%, 16%)"
  },

  thu_pic_two: {
    position: "absolute",
    zIndex: 4,
    width: "auto",
    height: "auto",
    marginTop: "620px",
    marginLeft: "560px"
  }
});

const messages = [
  "I am a biology and chemistry student with experience in",
  "molecular biology including DNA cloning, protein expression,",
  "purification, and characterization. I am engaged in community",
  "volunteering services though UNICEF as well as instructing",
  "advanced high school mathematics as an assistant teacher at",
  "Fairmont Preparatory Academy. I am passionate about drug",
  "development and saving people’s lives through science. As an",
  "undergraduate student at University of California, Irvine, I am",
  "currently working for Professor Gregory Weiss on structural",
  "characterization for a quinone synthetase."
];

export default function AboutPage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.layer_one} />
        <div className={classes.box_one_about}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="scaleY(-1)"
            leftFrom="0%"
            widthFrom="0%"
            heightFrom="0%"
            colorFrom="white"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo="46%"
            heightTo="80%"
            colorTo="white"
            opacityTo="1"
            boxShadowTo="unset"
            configType={config.molasses}
          />
        </div>
        <div className={classes.box_two_about}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="scaleX(-1)"
            leftFrom="0%"
            widthFrom="0%"
            heightFrom="0%"
            colorFrom="black"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo="50%"
            heightTo="80%"
            colorTo="black"
            opacityTo="1"
            boxShadowTo="unset"
            configType={config.molasses}
          />
        </div>
        <div className={classes.intro_about}>
          <Intro
            toggle={true}
            messages={messages}
            delay={500}
            configType={config.molasses}
            heightTrail={80}
            trailsTextHeight="40px"
            trailsTextLetterSpacing="0.011em"
            trailTextFontSize={21}
            trailTextFontWeight={400}
            trailTextColor="white"
          />
        </div>
        <div className={classes.thu_pic_one}>
          <ThuPic
            widthFrom="30vw"
            heightFrom="0vh"
            widthTo="30vw"
            heightTo="78vh"
            delay={1000}
            scale={1.4}
            yTilt={2}
            xTilt={6.2}
            picture={ThuAoDai}
          />
        </div>
        <div className={classes.thu_pic_two}>
          <ThuPic
            widthFrom="26vw"
            heightFrom="0vh"
            widthTo="26vw"
            heightTo="30vh"
            delay={1200}
            scale={1.4}
            yTilt={1.2}
            xTilt={2.2}
            picture={ThuGrad}
          />
        </div>
      </div>
    </>
  );
}
