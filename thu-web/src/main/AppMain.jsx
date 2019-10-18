import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ToolbarHook from "../shared/ToolbarHook";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";
import ContactPage from "../pages/ContactPage";
import PortraitPage from "../pages/PortraitPage";
import { withOrientationChange } from "react-device-detect";

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
      <ContactPage />
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

function AppMain(props) {
  const classes = useStyles();
  const [index, set] = useState(0);
  const onClick = useCallback(currentPage => set(currentPage));
  const { isPortrait } = props;

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  if (isPortrait) {
    return <PortraitPage />;
  } else {
    return (
      <>
        <CssBaseline />
        <ToolbarHook onCurrentPage={onClick} />
        <div className={classes.root}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item];
            return <Page key={key} style={props} />;
          })}
        </div>
      </>
    );
  }
}

export default withOrientationChange(AppMain);
