import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/styles";
import ToolbarView from "../shared/ToolbarView";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <HomePage />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <AboutPage />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ExperiencePage />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ExperiencePage />
    </animated.div>
  )
];

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
    "&>div": {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      display: "flex"
    }
  }
});

export default function AppMain() {
  const classes = useStyles();
  const [index, set] = useState(0);
  const onClick = useCallback(currentPage => set(currentPage));
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return (
    <>
      <ToolbarView onCurrentPage={onClick} />
      <CssBaseline />
      <div className={classes.root}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </>
  );
}
