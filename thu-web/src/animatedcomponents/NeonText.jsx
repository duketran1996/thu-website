import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Keyframes, animated, config } from "react-spring/renderprops";

const useStyles = makeStyles({
  message: {
    padding: "0",
    margin: "0",
    fontSize: props => props.fontSize,
    fontFamily: "Neon",
    letterSpacing: "-0.015em"
  }
});

export default function Neon(props) {
  const classes = useStyles(props);
  const [stateFlick, setStateFlick] = useState("");

  const Container = Keyframes.Spring({
    flick: async next => {
      await next({
        config: config.molasses,
        from: {
          height: "0px",
          color: "rgb(237,185,76,0)",
          textShadow: "0 0 40px #FFDD1B, 0 0 70px #FFDD1B"
        },
        to: {
          height: props.textHeight,
          color: "rgb(237,185,76,1)",
          textShadow: "0 0 40px #FFDD1B, 0 0 70px #FFDD1B"
        }
      });
      while (true) {
        await next({
          config: config.wobbly,
          from: {
            color: "#FFFDD0",
            textShadow:
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FFDD1B, 0 0 70px #FFDD1B, 0 0 80px #FFDD1B, 0 0 100px #FFDD1B, 0 0 150px #FFDD1B"
          },
          to: {
            color: "#FFFDD0",
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FFDD1B, 0 0 35px #FFDD1B, 0 0 40px #FFDD1B, 0 0 50px #FFDD1B, 0 0 75px #FFDD1B"
          },
          delay: Math.floor(Math.random() * 300 + 100)
        });
        await next({
          config: config.stiff,
          from: {
            color: "#FCF4A3",
            textShadow: "0 0 60px #FFDD1B, 0 0 90px #FFDD1B, 0 0 100px #FFDD1B"
          },
          to: {
            color: "#FCF4A3",
            textShadow: "0 0 40px #FFDD1B, 0 0 55px #FFDD1B, 0 0 60px #FFDD1B"
          },
          delay: Math.floor(Math.random() * 500 + 100)
        });
      }
    }
  });

  useEffect(() => {
    let timeFlick = setTimeout(() => {
      setStateFlick("flick");
    }, 1300);

    return () => {
      clearInterval(timeFlick);
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <Container reset native config={{ duration: 1000 }} state={stateFlick}>
        {styles => (
          <animated.p className={classes.message} style={{ ...styles }}>
            {props.message}
          </animated.p>
        )}
      </Container>
    </>
  );
}
