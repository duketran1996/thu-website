import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Work, School, Star } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../customCSS/timeline.min.css";

const useStyles = makeStyles({
  "@global": {
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
    },
    html: {
      fontSize: "120.25%"
    }
  },

  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.16667,
    letterSpacing: ".009em",
    margin: 0,
    paddingTop: 10
  },

  subtitle: {
    fontSize: 21,
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: ".004em",
    margin: 0,
    paddingTop: 10
  },

  description: {
    fontSize: "17px !important",
    fontWeight: "400 !important",
    lineHeight: "1.6 !important",
    letterSpacing: "-0.022em !important",
    margin: 0
  }
});

function IconType(type) {
  if (type.toLowerCase() === "work") {
    return <Work />;
  } else if (type.toLowerCase() === "education") {
    return <School />;
  } else if (type.toLowerCase() === "current") {
    return <Star />;
  }
}

export default function Timeline(props) {
  const data = props.data;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <VerticalTimeline>
        {Array.isArray(data) &&
          data.map((item, i) => (
            <VerticalTimelineElement
              key={"card_" + i}
              className="vertical-timeline-element"
              date={item.dates_employed}
              iconStyle={{ background: item.icon_background, color: "#fff" }}
              icon={IconType(item.icon_type)}
            >
              <img
                style={{ width: "100%" }}
                src={item.pic_url}
                alt={item.pic_title}
                hidden={item.pic_switch}
              />
              <h3 className={classes.title}>{item.title}</h3>
              <h4 className={classes.subtitle}>{item.company}</h4>
              <h4 className={classes.subtitle}>{item.location}</h4>
              <p className={classes.description}>{item.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
}
