import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { config } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import Intro from "../animatedcomponents/Intro";
import { Keyframes, animated } from "react-spring/renderprops";
import { Smartphone } from "@material-ui/icons";
import Rose from "../pictures/rose.jpg";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    //position: "relative"
  },

  layer_one: {
    position: "absolute",
    zIndex: 1,
    //background: "#808080",
    backgroundImage: `url(${Rose})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh"
  },

  msg_container: {
    position: "absolute",
    zIndex: 2,
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "42%",
    left: "0%",
    transform: "translate(-0%, -42%)"
  },

  phone_container: {
    width: 60,
    height: 0,
    overflow: "hidden"
  },

  phone_icon: { width: 60, height: 60, color: "white" }
}));

export default function HomePage() {
  const classes = useStyles();
  const [msg, setMsg] = useState("");
  const [stateShow, setStateShow] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/portrait", {
        headers: { Authorization: process.env.JWT_TOKEN }
      })
      .then(function(response) {
        // handle success
        setMsg(response.data.portrait_msg);
      })
      .catch(function(error) {
        // handle error
        setMsg("Sorry! Failed to get data.");
        console.log("Failed to get data from firebase: " + error);
      })
      .finally(function() {
        // always executed
        setStateShow("show");
      });

    // let timeShow = setTimeout(() => {
    //   setStateShow("show");
    // }, 1000);

    // return () => {
    //   clearInterval(timeShow);
    // };
  }, []);

  const Container = Keyframes.Spring({
    show: async next => {
      await next({
        config: { mass: 10, tension: 480, friction: 150 },
        from: { height: 0 },
        to: { height: 60 }
      });

      while (true) {
        await next({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(90deg)" }
        });

        await next({
          from: { transform: "rotate(90deg)" },
          to: { transform: "rotate(0deg)" }
        });
      }
    }
  });

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.layer_one} />
        <div className={classes.msg_container}>
          <Intro
            toggle={true}
            messages={msg}
            delay={500}
            configType={config.molasses}
            heightTrail={50}
            trailsTextHeight="auto"
            trailsTextLetterSpacing="-0.015em"
            trailTextFontSize={21}
            trailTextFontWeight={600}
            trailTextColor="white"
          />
          <Container reset native config={{ duration: 2000 }} state={stateShow}>
            {props => (
              <animated.div
                className={classes.phone_container}
                style={{ ...props }}
              >
                <Smartphone className={classes.phone_icon} />
              </animated.div>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}
