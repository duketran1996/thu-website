import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Work, School, Star } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../customCSS/timeline.min.css";

const data = [
  {
    pic_switch: true,
    pic_url:
      "http://d21gd0ap5v1ndt.cloudfront.net/web02/img.php?src=/images/members/UCI-campus-668x367.jpg&site=gccwater&width=920&height=518&crop",
    pic_title: "UC Irvine",
    icon_type: "Education",
    icon_background: "black",
    title: "Undergraduate Research Assistant",
    company: "UC Irvine",
    dates_employed: "Feb 2018 – Present",
    location: "Orange County, California Area",
    field: "Chemical Biology",
    description:
      "Structural Characterization of a Quinone Synthetase, TdiA, and Engineering Towards Continuous Flow Biosynthesis"
  },
  {
    pic_switch: true,
    pic_url: "https://www.snopes.com/tachyon/2016/07/math.jpg?resize=865,452",
    pic_title: "Fairmont Preparatory Academy",
    icon_type: "Work",
    icon_background: "black",
    title: "Mathematics Teaching Assistant",
    company: "Fairmont Preparatory Academy",
    dates_employed: "Aug 2015 – Present",
    location: "Anaheim, United States",
    field: "Calculus",
    description:
      "As a teaching assistant at Fairmont, I am currently working for Mr. Stephen Whitlock developing teaching curriculum for Pre-Calculus, Algebra II/ Pre-Calculus and Calculus classes. I am also responsible for writing and grading weekly tests quizzes, coordinating after school tutoring and teaching occasionally on Advanced Placement mathematics level such as implicit differentiation, relative extrema and related rates."
  },
  {
    pic_switch: true,
    pic_url:
      "https://www.gavi.org/uploadedimages/about_the_alliance/partners_in_the_alliance/logos/unicef_700.gif",
    pic_title: "UNICEF",
    icon_type: "Work",
    icon_background: "black",
    title:
      "Community Outreach Coordinator and Representative at the 2018 UNICEF Annual Student Summit",
    company: "UNICEF at UCI",
    dates_employed: "May 2017 – Present",
    location: "Orange County, California Area",
    field: "Volunteer",
    description:
      'My roles as a community outreach chair were to plan, search, and collaborate with other on-campus clubs and off-campus organizations for volunteer events around the community. I also worked with Fundraising/Finance chair to plan annual Hunger Banquet and Publicity/Awareness chair to plan Relay for Life. I also presented at 2018 UNICEF Annual Student Summit in Washington, DC on "How to host a successful Hunger Banquet?"I am passionate about advocating for children and promoting children\'s rights through community service activities and providing after school tutoring for underprivileged children at a local soup kitchen.'
  }
];

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

export default function Timeline() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <VerticalTimeline>
        {data.map((item, i) => (
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
