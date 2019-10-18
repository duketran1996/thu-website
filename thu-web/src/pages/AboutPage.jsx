import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Intro from "../animatedcomponents/Intro";
import Box from "../animatedcomponents/Box";
import { config } from "react-spring";
import ThuPic from "../animatedcomponents/ThuPic";
import { makeStyles } from "@material-ui/core/styles";
import imgTwo from "../pictures/img_2.jpg";
import imgThree from "../pictures/img_3.jpg";
import { isTablet, isMobileOnly } from "react-device-detect";
import abstract from "../pictures/abstract.jpg";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    //position: "relative"
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

  intro_about_desktop_landscape: {
    transform: "translate(10%, 10%)"
  },

  intro_about_mobile_landscape: {},

  intro_about_tablet_landscape: {
    top: "-2%",
    transform: "translate(5%, -2%)"
  },

  thu_pic_two_desktop_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "auto",
    height: "auto",
    top: "110%",
    left: "45%",
    transform: "translate(-45%, -110%)"
  },

  thu_pic_two_tablet_landscape: {
    position: "absolute",
    zIndex: 4,
    width: "auto",
    height: "auto",
    top: "95%",
    left: "50%",
    transform: "translate(-50%, -95%)"
  },

  wrapper_mobile_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "95%",
    display: "flex",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -60%)"
  },

  wrapper_tablet_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "95%",
    height: "80%",
    display: "flex",
    top: "100%",
    left: "40%",
    transform: "translate(-40%, -100%)"
  },

  wrapper_desktop_landscape: {
    position: "absolute",
    zIndex: 3,
    width: "92%",
    height: "80%",
    display: "flex",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -55%)"
  },

  grow: {
    flexGrow: 0.6
  },

  grow_one: {
    flexGrow: 0.12
  }
});

export default function AboutPage() {
  const classes = useStyles();
  const [intro, setIntro] = useState("");
  const [driveSwitch, setDriveSwitch] = useState(false);
  const [picTwo, setPicTwo] = useState("");
  const [picThree, setPicThree] = useState("");

  //Ipad Pro 12.5
  var thuPicOneTabletWidth = window.outerWidth >= 1366 ? "504px" : "304px";
  var thuPicOneTabletHeight = window.outerWidth >= 1366 ? "732px" : "450px";
  var thuPicTwoTabletWidth = window.outerWidth >= 1366 ? "436px" : "320px";
  var thuPicTwoTabletHeight = window.outerWidth >= 1366 ? "282px" : "190px";
  var boxTwoTabletWidth = window.outerWidth >= 1366 ? "55%" : "64%";

  const compatible = isMobileOnly
    ? {
        thuPicOneyTilt: 1.5,
        thuPicOnexTilt: 8,
        thuPicOneWidth: "180px",
        thuPicOneHeight: "260px",
        thuPicOneScaleFrom: 1,
        thuPicOneScaleTo: 1.8,
        classPicTwo: "unset",
        thuPicTwoToggle: true,
        thuPicTwoyTilt: "unset",
        thuPicTwoxTilt: "unset",
        thuPicTwoWidth: "unset",
        thuPicTwoHeight: "unset",
        thuPicTwoScaleFrom: "unset",
        thuPicTwoScaleTo: "unset",
        classIntro: classes.intro_about_mobile_landscape,
        introFontSize: 14,
        introTrailTextHeight: "26px",
        introTrailHeight: 50,
        boxOneToggle: true,
        boxOneWidth: "0%",
        boxOneHeight: "0%",
        boxTwoWidth: "68.3%",
        boxTwoHeightFrom: "100%",
        boxTwoHeightTo: "100%",
        classWrapper: classes.wrapper_mobile_landscape
      }
    : isTablet
    ? {
        thuPicOneyTilt: 2,
        thuPicOnexTilt: 6.2,
        thuPicOneWidth: thuPicOneTabletWidth,
        thuPicOneHeight: thuPicOneTabletHeight,
        thuPicOneScaleFrom: 1.4,
        thuPicOneScaleTo: 1.8,
        classPicTwo: classes.thu_pic_two_tablet_landscape,
        thuPicTwoToggle: false,
        thuPicTwoyTilt: 1.1,
        thuPicTwoxTilt: 2,
        thuPicTwoWidth: thuPicTwoTabletWidth,
        thuPicTwoHeight: thuPicTwoTabletHeight,
        thuPicTwoScaleFrom: 1.2,
        thuPicTwoScaleTo: 1.6,
        classIntro: classes.intro_about_tablet_landscape,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        boxOneToggle: false,
        boxOneWidth: "56%",
        boxOneHeight: "85%",
        boxTwoWidth: boxTwoTabletWidth,
        boxTwoHeightFrom: "0%",
        boxTwoHeightTo: "80%",
        classWrapper: classes.wrapper_tablet_landscape
      }
    : window.outerWidth === 1112
    ? {
        thuPicOneyTilt: 2,
        thuPicOnexTilt: 6.2,
        thuPicOneWidth: thuPicOneTabletWidth,
        thuPicOneHeight: thuPicOneTabletHeight,
        thuPicOneScaleFrom: 1.4,
        thuPicOneScaleTo: 1.8,
        classPicTwo: classes.thu_pic_two_tablet_landscape,
        thuPicTwoToggle: false,
        thuPicTwoyTilt: 1.1,
        thuPicTwoxTilt: 2,
        thuPicTwoWidth: thuPicTwoTabletWidth,
        thuPicTwoHeight: thuPicTwoTabletHeight,
        thuPicTwoScaleFrom: 1.2,
        thuPicTwoScaleTo: 1.6,
        classIntro: classes.intro_about_tablet_landscape,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        boxOneToggle: false,
        boxOneWidth: "56%",
        boxOneHeight: "85%",
        boxTwoWidth: boxTwoTabletWidth,
        boxTwoHeightFrom: "0%",
        boxTwoHeightTo: "80%",
        classWrapper: classes.wrapper_tablet_landscape
      }
    : {
        thuPicOneyTilt: 2,
        thuPicOnexTilt: 6.2,
        thuPicOneWidth: "504px",
        thuPicOneHeight: "732px",
        thuPicOneScaleFrom: 1,
        thuPicOneScaleTo: 1.4,
        classPicTwo: classes.thu_pic_two_desktop_landscape,
        thuPicTwoToggle: false,
        thuPicTwoyTilt: 1.2,
        thuPicTwoxTilt: 2.2,
        thuPicTwoWidth: "436px",
        thuPicTwoHeight: "282px",
        thuPicTwoScaleFrom: 1,
        thuPicTwoScaleTo: 1.4,
        classIntro: classes.intro_about_desktop_landscape,
        introFontSize: 21,
        introTrailTextHeight: "40px",
        introTrailHeight: 80,
        boxOneToggle: false,
        boxOneWidth: "46%",
        boxOneHeight: "80%",
        boxTwoWidth: "50%",
        boxTwoHeightFrom: "0%",
        boxTwoHeightTo: "80%",
        classWrapper: classes.wrapper_desktop_landscape
      };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/about", {
        headers: { Authorization: process.env.JWT_TOKEN }
      })
      .then(function(response) {
        // handle success
        setIntro(response.data.about_intro);
        setPicTwo(
          process.env.REACT_APP_GOOGLE_DRIVE_PHOTO + response.data.img_two
        );
        setPicThree(
          process.env.REACT_APP_GOOGLE_DRIVE_PHOTO + response.data.img_three
        );
        setDriveSwitch(response.data.drive_switch);
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
        <div hidden={compatible.boxOneToggle} className={classes.box_one_about}>
          <Box
            rootPosition="relative"
            rootWidth="100vw"
            rootHeight="100vh"
            rootTransform="scaleY(-1)"
            leftFrom="0%"
            widthFrom="0%"
            heightFrom="0%"
            colorFrom="white"
            opacityFrom="0"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo={compatible.boxOneWidth}
            heightTo={compatible.boxOneHeight}
            colorTo="white"
            opacityTo="1"
            boxShadowTo="unset"
            configType={config.molasses}
            backgroundImageFrom={`url(${abstract})`}
            backgroundRepeatFrom="no-repeat"
            backgroundSizeFrom="cover"
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
            heightFrom={compatible.boxTwoHeightFrom}
            colorFrom="black"
            opacityFrom="1"
            boxShadowFrom="unset"
            leftTo="50%"
            widthTo={compatible.boxTwoWidth}
            heightTo={compatible.boxTwoHeightTo}
            colorTo="black"
            opacityTo="1"
            boxShadowTo="unset"
            configType={config.molasses}
            backgroundImageFrom="unset"
            backgroundRepeatFrom="unset"
            backgroundSizeFrom="unset"
          />
        </div>
        <div className={compatible.classWrapper}>
          <div className={classes.grow_one} />
          <ThuPic
            widthFrom={compatible.thuPicOneWidth}
            heightFrom="0px"
            widthTo={compatible.thuPicOneWidth}
            heightTo={compatible.thuPicOneHeight}
            delay={1000}
            scaleFrom={compatible.thuPicOneScaleFrom}
            scaleTo={compatible.thuPicOneScaleTo}
            yTilt={compatible.thuPicOneyTilt}
            xTilt={compatible.thuPicOnexTilt}
            pictureHigh={driveSwitch ? picTwo : imgTwo}
          />
          <div
            hidden={compatible.thuPicTwoToggle}
            className={compatible.classPicTwo}
          >
            <ThuPic
              widthFrom={compatible.thuPicTwoWidth}
              heightFrom="0px"
              widthTo={compatible.thuPicTwoWidth}
              heightTo={compatible.thuPicTwoHeight}
              delay={1400}
              scaleFrom={compatible.thuPicTwoScaleFrom}
              scaleTo={compatible.thuPicTwoScaleTo}
              yTilt={compatible.thuPicTwoyTilt}
              xTilt={compatible.thuPicTwoxTilt}
              pictureHigh={driveSwitch ? picThree : imgThree}
            />
          </div>
          <div className={classes.grow} />
          <div className={compatible.classIntro}>
            <Intro
              toggle={true}
              messages={intro}
              delay={0}
              configType={config.molasses}
              heightTrail={compatible.introTrailHeight}
              trailsTextHeight={compatible.introTrailTextHeight}
              trailsTextLetterSpacing="0.011em"
              trailTextFontSize={compatible.introFontSize}
              trailTextFontWeight={400}
              trailTextColor="white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
